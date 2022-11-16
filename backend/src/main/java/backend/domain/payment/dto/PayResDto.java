package backend.domain.payment.dto;

import backend.domain.payment.entity.Payment;
import backend.global.auditing.BaseTime;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
public class PayResDto extends BaseTime {

    private Long paymentId;

    private int totalPrice;

    private int totalBatteries;

    public PayResDto(Payment payment) {
        this.paymentId = payment.getId();
        this.totalPrice = payment.getTotalPrice();
        this.totalBatteries = payment.getTotalBatteries();
        setCreatedAt(payment.getCreatedAt());
        setModifiedAt(payment.getModifiedAt());
    }
}
