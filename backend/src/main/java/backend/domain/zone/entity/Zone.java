package backend.domain.zone.entity;

import backend.domain.battery.entity.Battery;
import backend.domain.cart.entity.Cart;
import backend.domain.payment.entity.Payment;
import backend.global.auditing.BaseTime;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@AllArgsConstructor @NoArgsConstructor
@Entity @Getter @Setter @Builder
public class Zone extends BaseTime {

    @Id @GeneratedValue
    @Column(name = "zone_id")
    private Long id;

    private String name;

    private String details;

    private long latitude;

    private long longitude;

    private String photoURL;

    @OneToMany(mappedBy = "zone", cascade = CascadeType.REMOVE)
    private List<Battery> battery;

    @OneToMany(mappedBy = "zone")
    private List<Payment> payment;

}
