package backend.domain.payment.entity;

import backend.domain.battery.entity.Battery;
import backend.domain.zone.entity.Zone;
import backend.global.auditing.BaseTime;
import lombok.*;

import javax.persistence.*;

@NoArgsConstructor @AllArgsConstructor
@Entity @Getter @Setter @Builder
public class Payment extends BaseTime {

    @Id @GeneratedValue
    private Long id;

    private int totalPrice;

    private PayStatus status;

    private String startTime;

    private String endTime;

    private String PayMethod;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "battery_id")
    private Battery battery;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "zone_id")
    private Zone zone;

//    @OneToMany(mappedBy = "payment", cascade = CascadeType.REMOVE)
//    private List<reservation> reservation;

}
