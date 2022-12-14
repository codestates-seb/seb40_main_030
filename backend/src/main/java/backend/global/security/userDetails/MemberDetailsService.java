package backend.global.security.userDetails;

import backend.domain.admin.entity.Admin;
import backend.domain.admin.repository.AdminRepository;
import backend.domain.member.entity.Member;
import backend.domain.member.repository.MemberRepository;
import backend.global.exception.dto.BusinessLogicException;
import backend.global.exception.exceptionCode.ExceptionCode;
import backend.global.security.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;

@RequiredArgsConstructor
@Component
public class MemberDetailsService implements UserDetailsService {

    @Value("${mail.address.admin.list}")
    private List<String> adminMailAddress;
    private final MemberRepository memberRepository;
    private final AdminRepository adminRepository;
    private final CustomAuthorityUtils customAuthorityUtils;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if(adminMailAddress.contains(username)) {
            Admin findAdmin = adminRepository.findByEmail(username)
                    .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ADMIN_NOT_FOUND));
            return new AdminDetails(findAdmin);
        }
        else {
            Member findMember = memberRepository.findByMemberEmail(username)
                    .orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

            return new MemberDetails(findMember);
        }
    }


    private final class MemberDetails extends Member implements UserDetails {

        MemberDetails(Member member) {
            setId(member.getId());
            setEmail(member.getEmail());
            setPassword(member.getPassword());
            setRoles(member.getRoles());
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {

            return customAuthorityUtils.createAuthorities(this.getRoles());
        }

        @Override
        public String getUsername() { return getEmail();}

        @Override
        public boolean isAccountNonExpired() { return true; }

        @Override
        public boolean isAccountNonLocked() { return true; }

        @Override
        public boolean isCredentialsNonExpired() { return true; }

        @Override
        public boolean isEnabled() { return true; }

    }


    // admin ?????? ????????? ??????. ???, ????????? Member????????? ??????????????? extends??? Member????????? ?????????.
    // ????????? member??? Admin?????? email??? password??????????????? ??????????????? ????????? Admin??? ?????? ?????? Member??? ????????? ???????????? ????????????.
    // ????????? JWT?????? ?????? ????????? ????????? memberId?????? ???????????? ???????????? ?????? ????????? ???????????? ???????????? ????????? ?????? ????????????.
    // ???, Admin????????? ??? JWT?????? Admin???????????? ????????? ??? ??? ?????? memberId??? ???????????? ????????? ????????? ?????????.
    private final class AdminDetails extends Member implements UserDetails {

        AdminDetails(Admin admin) {
            setId(admin.getAdminId());
            setEmail(admin.getEmail());
            setPassword(admin.getPassword());
            setRoles(admin.getRoles());
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {

            return customAuthorityUtils.createAuthorities(this.getRoles());
        }

        @Override
        public String getUsername() { return getEmail();}

        @Override
        public boolean isAccountNonExpired() { return true; }

        @Override
        public boolean isAccountNonLocked() { return true; }

        @Override
        public boolean isCredentialsNonExpired() { return true; }

        @Override
        public boolean isEnabled() { return true; }

    }

}
