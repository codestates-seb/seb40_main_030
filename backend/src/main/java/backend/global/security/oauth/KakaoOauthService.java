package backend.global.security.oauth;

import java.util.*;
import backend.domain.member.dto.MemberDto;
import backend.domain.member.entity.Member;
import backend.domain.member.repository.MemberRepository;
import backend.domain.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@Transactional
@RequiredArgsConstructor
public class KakaoOauthService {


    private KakaoController kakaoController;

    private MemberService memberService;

    private MemberRepository memberRepository;
    public void loginKakao(KakaoProfile kakaoProfile) {
        System.out.println("카카오 아이디(번호):" + kakaoProfile.getId());
        System.out.println("카카오 이메일:" + kakaoProfile.getKakao_account().getEmail());
        System.out.println("유저 이름:" + kakaoProfile.getKakao_account().getEmail() + "_" + kakaoProfile.getId());
        System.out.println("유저 이메일:" + kakaoProfile.getKakao_account().getEmail());
        System.out.println("카카오 전용 패스워드:" + "1234");




//        Member findMember = memberService.findMember(kakaoMember.getId());

        if(memberRepository.findByMemberEmail(kakaoProfile.getKakao_account().getEmail()) == null){
            Member kakaoMember = Member.builder()
                    .nickname(kakaoProfile.getKakao_account().getEmail())
                    .password("1234")
                    .email(kakaoProfile.getKakao_account().getEmail())
                    .build();
            memberRepository.save(kakaoMember);
        }
        Member member = memberRepository.findByMemberEmail(kakaoProfile.getKakao_account().getEmail()).get();


    }
}
