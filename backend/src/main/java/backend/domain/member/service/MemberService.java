package backend.domain.member.service;

import backend.domain.member.entity.Member;
import backend.domain.member.repository.MemberRepository;
//import backend.domain.member.utils.CustomAuthorityUtil;
import backend.global.exception.dto.BusinessLogicException;
//import backend.global.exception.exceptionCode.BusinessException;
import backend.global.exception.exceptionCode.ExceptionCode;
//import backend.global.security.jwt.JwtTokenizer;
import lombok.RequiredArgsConstructor;
//import org.springframework.data.redis.core.RedisTemplate;
//import org.springframework.data.redis.core.ValueOperations;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDateTime;
import java.util.Optional;

@Transactional(readOnly = true)
@RequiredArgsConstructor @Service
public class MemberService {

    private final MemberRepository memberRepository;
//    private final PasswordEncoder passwordEncoder;          // 현재 시큐리티 미적용 상태이므로 주석처리해두었습니다.
//    private final CustomAuthorityUtil customAuthorityUtil;
//    private final JwtTokenizer jwtTokenizer;
//    private final RedisTemplate redisTemplate;

    @Transactional
    public Member createMember(Member member) {
        verifyNotExistsMember(member);
//        member.setPassword(passwordEncoder.encode(member.getPassword()));  // 현재 시큐리티 미적용으로 주석처리 해두었습니다.
//        member.setRoles(customAuthorityUtil.getRole());
        member.setCreatedAt(LocalDateTime.now());
        member.setModifiedAt(LocalDateTime.now());
        Member savedMember = memberRepository.save(member);
        return savedMember;

    }

    @Transactional
    public Member patchMember(Member member) {
        Member verifiedMember = verifyExistsMember(member.getId());
        Optional.ofNullable(member.getNickname()).ifPresent(verifiedMember::setNickname);
        Optional.ofNullable(member.getPhone()).ifPresent(verifiedMember::setPhone);
        Optional.ofNullable(member.getAddress()).ifPresent(verifiedMember::setAddress);
        Optional.ofNullable(member.getPhotoURL()).ifPresent(verifiedMember::setPhotoURL);
        verifiedMember.setModifiedAt(LocalDateTime.now());

        return memberRepository.save(verifiedMember);
    }

    @Transactional
    public void deleteMember(Long memberId) {
        Member deletingMember = verifyExistsMember(memberId);
        memberRepository.delete(deletingMember);
    }

    public Member findMember(Long memberId) {

        return verifyExistsMember(memberId);
    }

    public Page<Member> findMembers(Pageable pageable) {

        return memberRepository.findAllByOrderByCreatedAtDesc(pageable);
    }

//    public void outMember(HttpServletRequest request) {      현재 시큐리티 미적용으로 주석처리 했습니다.
//
//        String authentication = request.getHeader("Authorization");
//        String jws = authentication.replace("bearer", "");
//        registerJws(jws);
//    }



//
//
    private void verifyNotExistsMember(Member member) {
        Optional<Member> optionalEmail = memberRepository.findByMemberEmail(member.getEmail());
        if (optionalEmail.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.EMAIL_EXIST);
        }

        Optional<Member> optionalNickname = memberRepository.findByMemberNickname(member.getNickname());
        if (optionalNickname.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.NICKNAME_EXIST);
        }

    }

    private Member verifyExistsMember(Long memberId) {

        return memberRepository.findById(memberId).orElseThrow(()->
        {throw new BusinessLogicException(ExceptionCode.NOT_FOUND_MEMBER);});

    }

//    private void registerJws(String jws) {                           현재 시큐리티 미적용으로 주석처리 했습니다.
//        Map<String, Object> verifyJws = jwtTokenizer.verifyJws(jws);
//        ValueOperations valueOperations = redisTemplate.opsForValue();
//        String username = (String)verifyJws.get("username");
//        valueOperations.set("logout_"+jws,username, Duration.ofMinutes(jwtTokenizer.getAccessTokenExpirationMinutes()));
//    }

}
