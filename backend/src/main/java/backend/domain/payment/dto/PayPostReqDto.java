package backend.domain.payment.dto;

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
                .build();
        payment.setCreatedAt(LocalDateTime.now());
        payment.setModifiedAt(LocalDateTime.now());

        return payment;
    }

}
