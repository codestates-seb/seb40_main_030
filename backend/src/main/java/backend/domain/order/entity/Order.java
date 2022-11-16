package backend.domain.order.entity;

import backend.global.auditing.BaseTime;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;


@AllArgsConstructor @NoArgsConstructor
@Entity @Getter @Setter @Builder @Table(name = "orders")
public class Order extends BaseTime {

    @GeneratedValue @Id
    @Column(name = "order_id")
    private Long id;

    private OrderState status;

    private String startTime;

    private String endTime;

}

