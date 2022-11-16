package backend.domain.battery.entity;

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
    private String type;

    @Column
    private boolean status;

    @Column
    private int price;

    //@URL
    @Column
    private String photoURL;

//    @ManyToOne
//    @JoinColumn(name = "ZONE_ID")
//    private Zone zone;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false, name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();
}
