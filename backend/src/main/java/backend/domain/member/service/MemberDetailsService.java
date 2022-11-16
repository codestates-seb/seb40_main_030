package backend.domain.member.service;

import backend.domain.member.entity.Member;
import backend.domain.member.repository.MemberRepository;
import backend.global.exception.exceptionCode.BusinessException;
import backend.global.exception.exceptionCode.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class MemberDetailsService implements UserDetailsService {

    private final MemberRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Member findMember = verifyExistsMember(username);

        return (UserDetails) findMember;
    }



    private Member verifyExistsMember(String email) {

        Member findMember = repository.findByMemberEmail(email).orElseThrow(() -> {
            throw new BusinessException(ExceptionCode.MEMBER_NOT_EXISTS);
        });

        return findMember;
    }
}
