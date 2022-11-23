package backend.domain.station.entity;

import backend.domain.battery.entity.Battery;
import backend.domain.payment.entity.Payment;
import backend.global.auditing.BaseTime;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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

    private double latitude;

    private double longitude;

    private String photoURL;

    private String phone;

    @OneToMany(mappedBy = "station", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @JsonManagedReference
    private List<Battery> battery;

    @OneToMany(mappedBy = "station")
    private List<Payment> payment;

}