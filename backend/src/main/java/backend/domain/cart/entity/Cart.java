package backend.domain.cart.entity;

import backend.global.auditing.BaseTime;
import lombok.*;

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

}

