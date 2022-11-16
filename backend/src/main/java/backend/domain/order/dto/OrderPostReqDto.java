package backend.domain.order.dto;

import backend.domain.order.entity.Order;
import backend.domain.order.entity.OrderState;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class OrderPostReqDto {
    private String startTime;
    private String endTime;

    public Order toOrder() {
        Order order = new Order().builder()
                .status(OrderState.RESERVED)  // 기본 상태 생각해보기
                .startTime(this.startTime)
                .endTime(this.endTime)
                .build();
        order.setCreatedAt(LocalDateTime.now());
        order.setModifiedAt(LocalDateTime.now());

        return order;
    }
}
