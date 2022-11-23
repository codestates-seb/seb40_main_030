package backend.domain.payment.entity;

import backend.domain.battery.entity.Battery;
import backend.domain.member.entity.Member;
import backend.domain.station.entity.Station;
import backend.global.auditing.BaseTime;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;

@NoArgsConstructor @AllArgsConstructor
@Entity @Getter @Setter @Builder
public class Payment extends BaseTime {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int totalPrice;

    private PayStatus status;

    private String startTime;

    private String endTime;

    private String payMethod;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "battery_id")
    @JsonBackReference
    private Battery battery;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "station_id")
    @JsonBackReference
    private Station station;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    @JsonBackReference
    private Member member;

//    @OneToMany(mappedBy = "payment", cascade = CascadeType.REMOVE)  // 예약 테이블과 연관관계 매핑
//    private List<reservation> reservation;

}
