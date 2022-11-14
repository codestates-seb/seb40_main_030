package backend.domain.order.dto;

import backend.domain.order.entity.Order;
import backend.domain.order.entity.OrderState;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class OrderPatchReqDto {

    private Long orderId;
    private OrderState status;
    private String startTime;
    private String endTime;

    public Order toOrder() {
        Order order = new Order();
        order.setId(this.orderId);
        order.setState(this.status);
        order.setStartTime(this.startTime);
        order.setEndTime(this.endTime);
        return order;
    }
}