package backend.global.security.oauth;

import backend.domain.member.entity.Member;
import backend.domain.member.repository.MemberRepository;
import backend.domain.member.service.MemberService;
import backend.global.security.dto.LoginDto;
import backend.global.security.filter.JwtAuthenticationFilter;
import backend.global.security.jwt.JwtTokenizer;
import com.amazonaws.util.json.Jackson;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nimbusds.jose.shaded.json.JSONObject;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;

@RestController @RequiredArgsConstructor
public class KakaoController {

    @Value("${cos.key}")
    private String coskey;
    private final MemberService memberService;
    private final JwtTokenizer jwtTokenizer;
    private final MemberRepository memberRepository;


    @PostMapping("/auth/login2/{code}")
    public String kakaoLogin(@PathVariable("code") String code, HttpServletResponse response) {

        // Kakao Token 받는 구간. 공식문서에 맞춰 Req보내는 구간
        RestTemplate rt = new RestTemplate();
        HttpHeaders KakaoTokenReqHeaders = new HttpHeaders();
        KakaoTokenReqHeaders.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", "a6f21f427f37b9bdfd08bdcf65ef3faf");
        params.add("redirect_url", "http://localhost:5173/loginredirect");
        params.add("code", code);

        HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest =
                new HttpEntity<>(params, KakaoTokenReqHeaders);

        ResponseEntity<String> oauthTokenResponse = rt.exchange(
                "https://kauth.kakao.com/oauth/token",
                HttpMethod.POST,
                kakaoTokenRequest,
                String.class
        );

        ObjectMapper objectMapper = new ObjectMapper();
        KakaoToken kakaoToken = null;
        try {
            kakaoToken = objectMapper.readValue(oauthTokenResponse.getBody(), KakaoToken.class);
        } catch (JsonMappingException e) {
            e.printStackTrace();
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }


        // Kakao UserDetails 받는 구간. 공식문서에 맞춰 Req보내는 구간
        RestTemplate rt2 = new RestTemplate();
        HttpHeaders UserDetailsReqHeaders = new HttpHeaders();
        UserDetailsReqHeaders.add("Authorization", "Bearer " + kakaoToken.getAccess_token());
        UserDetailsReqHeaders.add("Contet-type", "application/x-www-form-urlencoded;charset=utf-8");

        HttpEntity<MultiValueMap<String, String>> kakaoProfileRequest =
                new HttpEntity<>(UserDetailsReqHeaders);

        ResponseEntity<String> userDetailsResponse = rt2.exchange(
                "https://kapi.kakao.com/v2/user/me",
                HttpMethod.POST,
                kakaoProfileRequest,
                String.class
        );

        ObjectMapper objectMapper2 = new ObjectMapper();
        KakaoProfile kakaoProfile = null;
        try {
            kakaoProfile = objectMapper2.readValue(userDetailsResponse.getBody(), KakaoProfile.class);
        } catch (JsonMappingException e) {
            e.printStackTrace();
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }


        // 비즈니스 계층에서 생성 및 저장 하는 게 좋을 듯합니다.
        Member kakaoMember = Member.builder()
                .id(kakaoProfile.getId())   // <- 카카오에서 제공하는 Id값 입력할 수 있도록 해보기
                .nickname(kakaoProfile.getKakao_account().getEmail())
                .password(coskey)
                .email(kakaoProfile.getKakao_account().getEmail())
                .phone("null")
                .address("null")
                .detailAddress("null")
                .photoURL("http://null")
                .build();

        Member savedMember = new Member();
        if (memberRepository.findByMemberNickname(kakaoMember.getNickname()).isEmpty()) {
            savedMember = memberService.createOauthMember(kakaoMember);
        }

        if (savedMember.getId() == null) {
            savedMember = memberRepository.findByMemberEmail(kakaoMember.getEmail()).get();
        }

        // Authenticationf를 Security 영속성 컨텍스트에 저장
        Authentication authentication = new UsernamePasswordAuthenticationToken(kakaoMember.getEmail(), coskey);
        SecurityContextHolder.getContext().setAuthentication(authentication);


        // 자체 JWT 생성 및 HttpServletResponse의 Header에 저장 (클라이언트 응답용)
        String accessToken = jwtTokenizer.delegateAccessToken(savedMember);
        String refreshToken = jwtTokenizer.delegateRefreshToken(savedMember);
        response.setHeader("AccessToken", "Bearer " + accessToken);
        response.setHeader("RefreshToken", refreshToken);


        // ??? 두번 담는 이유가 무엇일까요?
        HttpHeaders ResHeaders = new HttpHeaders();
        ResHeaders.add("AccessToken", "Bearer " + accessToken);
        ResHeaders.add("RefreshToken", refreshToken);



        // 의미 있는 리턴문인지 검증이 필요
        return "Success USER";
    }

    @RequestMapping(value="/logout2")
    public String logout(HttpSession session) {
        ModelAndView mav = new ModelAndView();

        kakaoLogout((String)session.getAttribute("accessToken"));
        session.removeAttribute("accessToken");
        return "logout";
    }

    public void kakaoLogout(String accessToken) {
        String reqURL = "http://kapi.kakao.com/v1/user/logout";
        try {
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Authorization", "Bearer " + accessToken);

            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
