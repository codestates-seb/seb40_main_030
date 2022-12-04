//package backend.global.security.oauth;
//
//import java.time.LocalDateTime;
//import java.util.*;
//import backend.domain.member.dto.MemberDto;
//import backend.domain.member.entity.Member;
//import backend.domain.member.repository.MemberRepository;
//import backend.domain.member.service.MemberService;
//import backend.global.exception.dto.BusinessLogicException;
//import backend.global.exception.exceptionCode.ExceptionCode;
//import backend.global.security.jwt.JwtTokenizer;
//import backend.global.security.utils.CustomAuthorityUtils;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//@Service
//@Slf4j
//@Transactional
//@RequiredArgsConstructor
//public class KakaoOauthService {
//
//    private final MemberRepository memberRepository;
//    private final PasswordEncoder passwordEncoder;
//    private final CustomAuthorityUtils customAuthorityUtils;
//    private final MemberService memberService;
//
//
//    public Member loginKakao(KakaoToken kakaoToken, KakaoProfile kakaoProfile) {
//
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
//        return memberRepository.save(kakaoMember);
//
////        return memberService.createMember(kakaoMember);  // 얘랑 이 밑에 전체랑 같은 소리임.
//
//
////        String encryptedPassword = passwordEncoder.encode(kakaoMember.getPassword());
//        kakaoMember.setPassword(encryptedPassword);
//
//        List<String> roles = customAuthorityUtils.createRoles(kakaoMember.getEmail());
//        kakaoMember.setRoles(roles);
//
//        kakaoMember.setCreatedAt(LocalDateTime.now());
//        kakaoMember.setModifiedAt(LocalDateTime.now());
//
//        Optional<Member> optionalEmail = memberRepository.findByMemberEmail(kakaoMember.getEmail());
//        if (optionalEmail.isPresent()) return;
//
//        Optional<Member> optionalNickname = memberRepository.findByMemberNickname(kakaoMember.getNickname());
//        if (optionalNickname.isPresent()) return;
//
////        memberRepository.save(kakaoMember);
//
//    }
//
//}
