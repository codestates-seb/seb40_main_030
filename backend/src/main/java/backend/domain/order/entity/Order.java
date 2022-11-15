package backend.domain.order.entity;

import backend.global.auditing.BaseTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;


@AllArgsConstructor @NoArgsConstructor
@Entity
@Getter @Setter @Table(name = "orders")
public class Order extends BaseTime {

    @GeneratedValue @Id
    @Column(name = "order_id")
    private Long id;

    private OrderState status;

    private String startTime;

    private String endTime;

}

