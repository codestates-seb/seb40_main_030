package backend.domain.order.dto;

import backend.domain.order.entity.Order;
import backend.global.auditing.BaseTime;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class OrderResDto extends BaseTime {

    private Long orderId;
    private String status;
    private String startTime;
    private String endTime;

    public OrderResDto(Order order) {
        this.orderId = order.getId();
        this.status = order.getState().getMessage();
        this.startTime = order.getStartTime();
        this.endTime = order.getEndTime();
        setCreatedAt(order.getCreatedAt());
        setModifiedAt(order.getModifiedAt());
    }
}
