package backend.domain.order.dto;

import backend.domain.order.entity.Order;
import backend.domain.order.entity.StatusState;
import backend.global.auditing.BaseTime;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
public class OrderPatchReqDto {

    private Long orderId;
    private StatusState status;
    private String startTime;
    private String endTime;

    public Order toOrder() {
        Order order = new Order();
        order.setId(this.orderId);
        order.setStatus(this.status);
        order.setStartTime(this.startTime);
        order.setEndTime(this.endTime);
        return order;
    }
}