package backend.domain.station.entity;

import backend.domain.battery.entity.Battery;
import backend.domain.payment.entity.Payment;
import backend.global.auditing.BaseTime;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@AllArgsConstructor @NoArgsConstructor
@Entity @Getter @Setter @Builder
public class Station extends BaseTime {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "station_id")
    private Long id;

    private String name;

    private String details;

    private long latitude;

    private long longitude;

    private String photoURL;

    @OneToMany(mappedBy = "station", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<Battery> battery;

    @OneToMany(mappedBy = "station")
    private List<Payment> payment;

}