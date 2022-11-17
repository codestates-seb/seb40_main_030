package backend.domain.cart.entity;

import backend.domain.battery.entity.Battery;
import backend.global.auditing.BaseTime;
import lombok.*;
import org.springframework.data.domain.Page;

import javax.persistence.*;
import java.util.List;


@AllArgsConstructor @NoArgsConstructor
@Entity @Getter @Setter @Builder
public class Cart extends BaseTime {

    @GeneratedValue @Id
    @Column(name = "cart_id")
    private Long id;

    private Page<Battery> Batteries;

    private String startTime;

    private String endTime;

}

