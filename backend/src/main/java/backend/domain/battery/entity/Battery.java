package backend.domain.battery.entity;

import backend.domain.cart.entity.Cart;
import backend.domain.zone.entity.Zone;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Battery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long batteryId;

    @Column
    private String capacity;

    @Column
    private boolean status;

    @Column
    private int price;

    @URL
    @Column
    private String photoURL;

    @ManyToOne
    @JoinColumn(name = "zone_id")
    private Zone zone;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false, name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();
}
