package backend.domain.zone.entity;

import backend.domain.cart.entity.Cart;
import backend.global.auditing.BaseTime;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@AllArgsConstructor @NoArgsConstructor
@Entity @Getter @Setter @Builder @Table(name = "Zones")
public class Zone extends BaseTime {

    @Id @GeneratedValue
    @Column(name = "zone_id")
    private Long id;

    private String name;

    private String details;

    private long latitude;

    private long longitude;

    private String photoURL;

}
