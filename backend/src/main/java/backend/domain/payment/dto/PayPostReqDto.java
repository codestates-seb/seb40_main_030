package backend.domain.payment.dto;

import backend.domain.payment.entity.PayStatus;
import backend.domain.payment.entity.Payment;
import backend.global.auditing.BaseTime;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
public class PayPostReqDto extends BaseTime {

    private int totalPrice;

    private int totalBatteries;


    public Payment toPayment () {
        Payment payment = new Payment().builder()
                .totalPrice(this.totalPrice)
                .totalBatteries(this.totalBatteries)
                .status(PayStatus.IN_PROGRESS)
                .PayMethod("카카오페이")
                .build();
        payment.setCreatedAt(LocalDateTime.now());
        payment.setModifiedAt(LocalDateTime.now());

        return payment;
    }

}
