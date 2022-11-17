package backend.domain.payment.dto;

import backend.domain.payment.entity.PayStatus;
import backend.domain.payment.entity.Payment;
import backend.global.auditing.BaseTime;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
public class PayPatchReqDto extends BaseTime {

    private int totalPrice;

    private int totalBatteries;

    private PayStatus payStatus;

    private String payMethod;

    public Payment toPayment(){
        Payment payment = new Payment().builder()
                .totalPrice(this.totalPrice)
                .totalBatteries(this.totalBatteries)
                .status(this.payStatus)
                .PayMethod(this.payMethod)
                .build();
        payment.setModifiedAt(LocalDateTime.now());
        return payment;
    }

}
