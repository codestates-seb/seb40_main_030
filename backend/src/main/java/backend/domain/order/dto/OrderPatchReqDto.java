package backend.domain.order.dto;

import backend.domain.order.entity.Order;
import backend.domain.order.entity.OrderState;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
public class OrderPatchReqDto {

    private Long orderId;
    private OrderState status;
    private String startTime;
    private String endTime;

    public Order toOrder() {
        Order order = new Order().builder()
                .id(this.orderId)
                .status(this.status)
                .startTime(this.startTime)
                .endTime(this.endTime)
                .build();
        order.setModifiedAt(LocalDateTime.now());

        return order;
    }
}