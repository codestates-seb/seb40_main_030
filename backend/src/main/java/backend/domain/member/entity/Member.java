package backend.domain.member.entity;

import backend.global.auditing.BaseTime;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;



@AllArgsConstructor
@NoArgsConstructor
@Entity @Builder @Getter @Setter
public class Member extends BaseTime {
    @GeneratedValue
    @Id @Column(name = "member_id")
    private Long id;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String nickname;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String photoURL;


//    @ElementCollection(fetch = FetchType.EAGER)     현재 시큐리티 미적용 상태이므로 주석처리 해두었습니다
//    List<String> roles = new ArrayList<>();


//    public Collection<? extends GrantedAuthority> getAuthorities() {   현재 시큐리티 미적용 상태이므로 주석처리 해두었습니다
//        List<GrantedAuthority> authorities = this.getRoles().stream().map(strAuth -> new SimpleGrantedAuthority("ROLE_" + strAuth)).collect(Collectors.toList());
//        return authorities;
//    }

//    public String getPassword() {
//        return this.getPassword();
//    }
//
//
//    public String getUsername() {
//        return this.getEmail();
//    }
//
//
//    public boolean isAccountNonExpired() {
//        return true;
//    }
//
//
//    public boolean isAccountNonLocked() {
//        return true;
//    }
//
//
//    public boolean isCredentialsNonExpired() {
//        return true;
//    }
//
//
//    public boolean isEnabled() {
//        return true;
//    }

    public Member(Member member) {
        setId(member.getId());
        setEmail(member.getEmail());
        setPhone(member.getPhone());
        setNickname(member.getNickname());
        setAddress(member.getAddress());
        setPhotoURL(member.getPhotoURL());
        setCreatedAt(member.getCreatedAt());
        setModifiedAt(member.getModifiedAt());
    }

}

