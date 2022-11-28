package backend.domain.payment.dto;

import backend.domain.payment.entity.PayStatus;
import backend.domain.payment.entity.Payment;
import backend.global.auditing.BaseTime;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

@Getter @Setter
public class PayPostReqDto {

    @NotBlank(message = "시작시간을 지정해주세요.")
    private String startTime;
    @NotBlank(message = "반납시간을 지정해주세요.")
    private String endTime;

    private Long batteryId;

    public Payment toPayment () {
        Payment payment = new Payment().builder()
                .status(PayStatus.IN_PROGRESS)
                .startTime(this.startTime)
                .endTime(this.endTime)
                .payMethod("카카오페이")
                .build();
        payment.setCreatedAt(LocalDateTime.now());
        payment.setModifiedAt(LocalDateTime.now());

        return payment;
    }

}
