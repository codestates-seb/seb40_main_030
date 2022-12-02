package backend.global.security.oauth;

import backend.domain.member.dto.MemberDto;
import backend.domain.member.entity.Member;
import backend.domain.member.service.MemberService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.core.OAuth2Token;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.UUID;

@RestController

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

    @Autowired
    private KakaoOauthService kakaoOauthService;
    @GetMapping("/auth/login2")
    public String kakaoLogin(String code) {

        RestTemplate rt = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", "841b96d25f2a485c724c9710be36a160");
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
        headers2.add("Authorization", "Bearer "+kakaoToken.getAccess_token());
        headers2.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");


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
//        kakaoOauthService.loginKakao(kakaoProfile); //nullPointException 가능성있음

//        System.out.println("카카오 아이디(번호):"+kakaoProfile.getId());
//        System.out.println("카카오 이메일:"+kakaoProfile.getKakao_account().getEmail());
//        System.out.println("유저 이름:"+kakaoProfile.getKakao_account().getEmail()+"_"+kakaoProfile.getId());
//        System.out.println("유저 이메일:"+kakaoProfile.getKakao_account().getEmail());
//        System.out.println("카카오 전용 패스워드:"+"1234");
//
//        Member kakaoMember = Member.builder()
//                            .nickname(kakaoProfile.getKakao_account().getEmail())
//                            .password("1234")
//                            .email(kakaoProfile.getKakao_account().getEmail())
//                            .oauth("kakao")
//                            .build();
//
//      memberService.findMember(kakaoMember.getId());
//
//      Member originMember =  memberService.createMember(kakaoMember);
//
//
//      Member createdMember =  memberService.createMember(kakaoMember);
//      MemberDto.PostResDto response3 = new MemberDto.PostResDto(createdMember);
//
        return response.getBody()+","+response2.getBody();
    }
}
