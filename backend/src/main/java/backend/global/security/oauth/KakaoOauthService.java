package backend.global.security.oauth;

import java.time.LocalDateTime;
import java.util.*;
import backend.domain.member.dto.MemberDto;
import backend.domain.member.entity.Member;
import backend.domain.member.repository.MemberRepository;
import backend.domain.member.service.MemberService;
import backend.global.exception.dto.BusinessLogicException;
import backend.global.exception.exceptionCode.ExceptionCode;
import backend.global.security.jwt.JwtTokenizer;
import backend.global.security.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@Transactional
@RequiredArgsConstructor
public class KakaoOauthService {

    private final MemberRepository memberRepository;

    public Member loginKakao(KakaoToken kakaoToken, KakaoProfile kakaoProfile) {

        Member kakaoMember = new Member();
        kakaoMember.setId(kakaoProfile.getId());
        kakaoMember.setEmail(kakaoProfile.getId() + "@naver.com");
        kakaoMember.setPassword("123411aa");
        kakaoMember.setNickname("먹는샘물" + kakaoProfile.getId());
        kakaoMember.setKakaoAccessToken(kakaoToken.getAccess_token());
        kakaoMember.setKakaoRefreshToken(kakaoToken.getRefresh_token());

        return memberRepository.save(kakaoMember);

    }

}
