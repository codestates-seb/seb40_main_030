package backend.domain.order.dto;

import backend.domain.order.entity.Order;
import backend.domain.order.entity.OrderState;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
public class OrderPostReqDto {
    private String startTime;
    private String endTime;

    public Order toOrder() {
        Order order = new Order();
        order.setState(OrderState.RESERVED);   // 기본적으로 주문은 주문중으로 생성
        order.setStartTime(this.startTime);
        order.setEndTime(this.endTime);
        order.setCreatedAt(LocalDateTime.now());
        order.setModifiedAt(LocalDateTime.now());
        return order;
    }
}
