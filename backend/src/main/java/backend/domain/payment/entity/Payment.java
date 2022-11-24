package backend.domain.payment.entity;

import backend.domain.battery.entity.Battery;
import backend.domain.battery.entity.Reservation;
import backend.domain.member.entity.Member;
import backend.domain.station.entity.Station;
import backend.global.auditing.BaseTime;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor @AllArgsConstructor
@Entity @Getter @Setter @Builder
public class Payment extends BaseTime {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "payment_id")
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

    @OneToMany(mappedBy = "payment", cascade = CascadeType.REMOVE)
    @JsonManagedReference
    private List<Reservation> reservations;

}
