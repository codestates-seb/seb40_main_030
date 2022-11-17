package backend.domain.member.entity;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import javax.persistence.*;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Builder
@Transactional
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity

public class Member {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long memberId;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String nickname;

    @Column(nullable = false)
    private String phone;


//
//    @Column(nullable = false)
//    @OneToMany
//    @JoinColumn(name = "CAR_Id")
//    private Car car;

@ElementCollection(fetch = FetchType.EAGER)
List<String> roles = new ArrayList<>();


    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = this.getRoles().stream().map(strAuth -> new SimpleGrantedAuthority("ROLE_" + strAuth)).collect(Collectors.toList());
        return authorities;
    }

    public String getPassword() {
        return this.getPassword();
    }


    public String getUsername() {
        return this.getEmail();
    }


    public boolean isAccountNonExpired() {
        return true;
    }


    public boolean isAccountNonLocked() {
        return true;
    }


    public boolean isCredentialsNonExpired() {
        return true;
    }


    public boolean isEnabled() {
        return true;
    }

}

