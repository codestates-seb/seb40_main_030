package backend.global.security.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CustomAuthorityUtils {
    @Value("${mail.address.admin.list}")
    private List<String> adminMailAddress;

    private final List<GrantedAuthority> ADMIN_ROLES = AuthorityUtils.createAuthorityList("ROLE_ADMIN", "ROLE_USER");
    private final List<GrantedAuthority> USER_ROLES = AuthorityUtils.createAuthorityList("ROLE_USER");
    private final List<String> ADMIN_ROLES_STRING = List.of("ADMIN", "USER");
    private final List<String> USER_ROLES_STRING = List.of("USER");

    // 메모리 상의 Role을 기반으로 권한 정보 생성.
    public List<GrantedAuthority> createAuthorities(String email) {
        if (email.equals(adminMailAddress)) {
            return ADMIN_ROLES;
        }
        return USER_ROLES;
    }

    // DB에 저장된 Role을 기반으로 권한 정보 생성
    public List<GrantedAuthority> createAuthorities(List<String> roles) {
        List<GrantedAuthority> authorities = roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                .collect(Collectors.toList());
        return authorities;
    }

    // DB 저장 용
    public List<String> createRoles(String email) {
        // 이 로직에 따라 ADMIN이 될지 USER가 될지 결정됨
        if(adminMailAddress.contains(email)) {
            return ADMIN_ROLES_STRING;
        }
        return USER_ROLES_STRING;
    }
}


// admin 역할 부여 방법 1.
// : yml의 mail.address.admin 부분에 설정. yml의 mail.address.admin부분을 다시 변수로 동적 할당
// 예시 : admin계정을 직접 만들어 할당해 줌

// admin 역할 부여 방법 2.
// : 위의 create로직 수정
// 예시 : email형식이 @battery.com으로 되어있을 경우 Admin으로 적용. 그 외엔 user로 적용