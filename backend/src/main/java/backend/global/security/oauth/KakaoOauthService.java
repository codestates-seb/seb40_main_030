package backend.global.security.oauth;


import backend.domain.member.entity.Member;
import backend.domain.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@Transactional
@RequiredArgsConstructor
public class KakaoOauthService {

    private final MemberRepository memberRepository;

    public Member loginKakao(KakaoToken kakaoToken, KakaoProfile kakaoProfile) {

        return null;
    }

}