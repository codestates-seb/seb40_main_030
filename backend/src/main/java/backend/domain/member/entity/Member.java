package backend.domain.member.entity;
import backend.domain.payment.entity.Payment;
import backend.global.auditing.BaseTime;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Entity @Builder @Getter @Setter
public class Member extends BaseTime {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @ElementCollection(fetch = FetchType.EAGER)
    List<String> roles = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.REMOVE)
    private List<Payment> payment;

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

