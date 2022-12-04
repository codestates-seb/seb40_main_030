package backend.global.security.userDetails;

import backend.domain.admin.entity.Admin;
import backend.domain.admin.mapper.repository.AdminRepository;
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


    // admin 레포 뒤지는 용도. 단, 검증은 Member객체로 받을거라서 extends는 Member객체로 받는다.
    // 어차피 member나 Admin이나 email과 password들어가는건 매한가지기 때문에 Admin에 있는 값을 Member에 넣어서 검증해도 무방하다.
    // 오히려 JWT에서 값을 추출할 때에도 memberId라는 키값으로 식별자를 받는 로직을 이중으로 구현하지 않아도 되서 유리하다.
    // 즉, Admin로그인 후 JWT에서 Admin식별자를 추출할 때 키 값은 memberId로 입력해서 받아도 된다는 소리다.
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
