package backend.domain.order.dto;

import backend.domain.order.entity.Order;
import backend.domain.order.entity.StatusState;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
public class OrderPostReqDto {
    private String startTime;
    private String endTime;

    public Order toOrder() {
        Order order = new Order();
        order.setId(1L);
        order.setStatus(StatusState.RESERVED);
        order.setStartTime(this.startTime);
        order.setEndTime(this.endTime);
        order.setCreatedAt(LocalDateTime.now());
        order.setModifiedAt(LocalDateTime.now());
        return order;
    }
}
