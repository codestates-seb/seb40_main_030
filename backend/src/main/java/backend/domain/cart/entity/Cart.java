package backend.domain.cart.entity;

import backend.domain.battery.entity.Battery;
import backend.domain.member.entity.Member;
import backend.domain.zone.entity.Zone;
import backend.global.auditing.BaseTime;
import lombok.*;
import org.springframework.data.domain.Page;

import javax.persistence.*;
import java.util.List;


@AllArgsConstructor @NoArgsConstructor
@Entity @Getter @Setter @Builder
public class Cart extends BaseTime {

    @GeneratedValue @Id
    @Column(name = "cart_id")
    private Long id;

    private String startTime;

    private String endTime;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.PERSIST)
    private List<Battery> battery;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "zone_id")
    private Zone zone;

}

