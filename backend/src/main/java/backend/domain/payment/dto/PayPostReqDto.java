package backend.domain.payment.dto;

import backend.domain.payment.entity.PayStatus;
import backend.domain.payment.entity.Payment;
import backend.global.auditing.BaseTime;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter @Setter
public class PayPostReqDto extends BaseTime {

    private String startTime;
    private String endTime;


    public Payment toPayment () {
        Payment payment = new Payment().builder()
                .status(PayStatus.IN_PROGRESS)
                .startTime(this.startTime)
                .endTime(this.endTime)
                .PayMethod("카카오페이")
                .build();
        payment.setCreatedAt(LocalDateTime.now());
        payment.setModifiedAt(LocalDateTime.now());

        return payment;
    }

}
