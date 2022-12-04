package backend.global.security.oauth;

import backend.domain.member.dto.MemberDto;
import backend.domain.member.entity.Member;
import backend.domain.member.service.MemberService;
import backend.global.security.filter.JwtAuthenticationFilter;
import backend.global.security.jwt.JwtTokenizer;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.OAuth2Token;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;
import java.util.HashMap;
import java.util.UUID;

@RestController @RequiredArgsConstructor
public class KakaoController {

//    KakaoAPI kakaoApi = new KakaoAPI();
//
//    @RequestMapping(value="auth/login2")
//    public ModelAndView login(@RequestParam("code") String code, HttpSession session) {
//        ModelAndView mav = new ModelAndView();
//        // 1번 인증코드 요청 전달
//        String accessToken = kakaoApi.getAccessToken(code);
//        // 2번 인증코드로 토큰 전달
//        HashMap<String, Object> userInfo = kakaoApi.getUserInfo(accessToken);
//
//        System.out.println("login info : " + userInfo.toString());
//
//        if(userInfo.get("email") != null) {
//            session.setAttribute("memberId", userInfo.get("email"));
//            session.setAttribute("accessToken", accessToken);
//        }
//        mav.addObject("memberId", userInfo.get("email"));
//        mav.setViewName("index");
//        return mav;
//    }
//
//    @RequestMapping(value="/logout")
//    public ModelAndView logout(HttpSession session) {
//        ModelAndView mav = new ModelAndView();
//
//        kakaoApi.kakaoLogout((String)session.getAttribute("accessToken"));
//        session.removeAttribute("accessToken");
//        session.removeAttribute("memberId");
//        mav.setViewName("index");
//        return mav;
//    }

    @Value("${cos.key}")
    private String coskey;
    private final MemberService memberService;
//    private KakaoOauthService kakaoOauthService;

    @GetMapping("/auth/login2")
    public ModelAndView kakaoLogin(String code) {

        RestTemplate rt = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", "a6f21f427f37b9bdfd08bdcf65ef3faf");
        params.add("redirect_url", "http://localhost:8080/auth/login2");
        params.add("code", code);

        HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest =
                new HttpEntity<>(params, headers);

        ResponseEntity<String> response = rt.exchange(
                "https://kauth.kakao.com/oauth/token",
                HttpMethod.POST,
                kakaoTokenRequest,
                String.class
        );

        ObjectMapper objectMapper = new ObjectMapper();
        KakaoToken kakaoToken = null;
        try {
            kakaoToken = objectMapper.readValue(response.getBody(), KakaoToken.class);
        } catch (JsonMappingException e) {
            e.printStackTrace();
        } catch (JsonProcessingException e) {
            e.printStackTrace();

        }

        RestTemplate rt2 = new RestTemplate();
        HttpHeaders headers2 = new HttpHeaders();
        headers2.add("Authorization", "Bearer "+   kakaoToken.getAccess_token());
        headers2.add("Contet-type", "application/x-www-form-urlencoded;charset=utf-8");


        HttpEntity<MultiValueMap<String, String>> kakaoProfileRequest =
                new HttpEntity<>(headers2);

        ResponseEntity<String> response2 = rt2.exchange(
                "https://kapi.kakao.com/v2/user/me",
                HttpMethod.POST,
                kakaoProfileRequest,
                String.class
        );

        ObjectMapper objectMapper2 = new ObjectMapper();
        KakaoProfile kakaoProfile = null;
        try {
            kakaoProfile = objectMapper2.readValue(response2.getBody(), KakaoProfile.class);
        } catch (JsonMappingException e) {
            e.printStackTrace();
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

//        kakaoOauthService.loginKakao(kakaoToken, kakaoProfile); //nullPointException 가능성있음

//        headers2.set("Authorization",jwtTokenizer.delegateAccessToken(member));
        Member kakaoMember = Member.builder()
                .id(kakaoProfile.getId())
                .nickname(kakaoProfile.getKakao_account().getProfile().getNickname())
                .password(coskey)
                .email(kakaoProfile.getKakao_account().getEmail())
                .phone("null")
                .address("null")
                .detailAddress("null")
                .photoURL("http://null")
                .build();


        Member originmember = memberService.find(kakaoMember.getNickname());

        if(originmember == null) {
            memberService.create(kakaoMember);
        }

        //로그인

        Authentication authentication = new UsernamePasswordAuthenticationToken(kakaoMember.getEmail(), coskey);
        SecurityContextHolder.getContext().setAuthentication(authentication);

//        HttpHeaders headers1 = new HttpHeaders();
//        headers1.setLocation(URI.create("/"));
//        return new ResponseEntity<>(headers1, HttpStatus.MOVED_PERMANENTLY);

        ModelAndView mav = new ModelAndView();
        mav.addObject("userId", kakaoProfile.getKakao_account().email);
        mav.setViewName("index");
        return mav;

//        memberService.createMember(kakaoMember);

//        return "redirect:/";
//        Member kakaoMember = new Member();
//        kakaoMember.setId(kakaoProfile.getId());
////        kakaoMember.setEmail(kakaoProfile.getKakao_account().getEmail());
//        kakaoMember.setEmail(kakaoProfile.getId() + "@naver.com");
//        kakaoMember.setPassword("123411aa");
////        kakaoMember.setNickname(kakaoProfile.getProperties().getNickname()); // property == null
//        kakaoMember.setNickname("먹는샘물" + kakaoProfile.getId());
//        kakaoMember.setKakaoAccessToken(kakaoToken.getAccess_token());
//        kakaoMember.setKakaoRefreshToken(kakaoToken.getRefresh_token());
//
//        return memberService.createMember(kakaoMember);
    }
    @RequestMapping(value="/logout")
    public ModelAndView logout(HttpSession session) {
        ModelAndView mav = new ModelAndView();

        kakaoLogout((String)session.getAttribute("accessToken"));
        session.removeAttribute("accessToken");
        session.removeAttribute("userId");
        mav.setViewName("index");
        return mav;
    }
    public void kakaoLogout(String accessToken) {
        String reqURL = "https://kapi.kakao.com/v1/user/logout";
        try {
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("post");
            conn.setRequestProperty("Authorization", "Bearer " + accessToken);
            int responseCode = conn.getResponseCode();

            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));

            String result = "";
            String line = "";

            while ((line = br.readLine()) != null) {
                result += line;
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }
}

