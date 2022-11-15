package backend.domain.member.service;

import backend.domain.member.entity.Member;
import backend.domain.member.repository.MemberRepository;
import backend.domain.member.utils.CustomAuthorityUtil;
import backend.global.exception.exceptionCode.BusinessException;
import backend.global.exception.exceptionCode.ExceptionCode;
import backend.global.security.jwt.JwtTokenizer;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.time.Duration;
import java.util.List;
import java.util.Map;

@Transactional
@RequiredArgsConstructor
@Service
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtil customAuthorityUtil;
    private final JwtTokenizer jwtTokenizer;
    private final RedisTemplate redisTemplate;


    public Member createMember(Member member) {
        verifyNotExistsMember(member.getEmail(), member.getNickname());
        member.setPassword(passwordEncoder.encode(member.getPassword()));
        member.setRoles(customAuthorityUtil.getRole());
        Member savedMember = memberRepository.save(member);
        return savedMember;

    }

    public Member removeMember(Long memberId) {
        Member deletingMember = verifyExistsMember(memberId);
        Member deletedMember = memberRepository.save(deletingMember);
        return deletedMember;
    }

    public Member findMember(Long memberId) {

        Member findMember = verifyExistsMember(memberId);
        return findMember;
    }

    public List<Member> findMembers() {

        List<Member> allMemberList = memberRepository.findAll();
        return allMemberList;
    }

    public void outMember(HttpServletRequest request) {

        String authentication = request.getHeader("Authorization");
        String jws = authentication.replace("bearer", "");
        registerJws(jws);
    }



//
//
    private void verifyNotExistsMember(String email, String name) {

        memberRepository.findMemberByEmailOrNickname(email, name).ifPresent(
                findMember -> {throw new BusinessException(ExceptionCode.ACCOUNT_EXIST);});

    }

    private Member verifyExistsMember(Long memberId) {

        return memberRepository.findById(memberId).orElseThrow(()->
        {throw new BusinessException(ExceptionCode.MEMBER_NOT_EXISTS);});

    }

    private void registerJws(String jws) {
        Map<String, Object> verifyJws = jwtTokenizer.verifyJws(jws);
        ValueOperations valueOperations = redisTemplate.opsForValue();
        String username = (String)verifyJws.get("username");
        valueOperations.set("logout_"+jws,username, Duration.ofMinutes(jwtTokenizer.getAccessTokenExpirationMinutes()));
    }

}
