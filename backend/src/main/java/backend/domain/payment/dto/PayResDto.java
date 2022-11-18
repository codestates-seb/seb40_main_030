package backend.domain.payment.dto;

import backend.domain.battery.entity.Battery;
import backend.domain.payment.entity.PayStatus;
import backend.domain.payment.entity.Payment;
import backend.domain.zone.entity.Zone;
import backend.global.auditing.BaseTime;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
public class PayResDto extends BaseTime {

    private Long paymentId;
    private int totalPrice;
    private PayStatus payStatus;
    private String startTime;
    private String endTime;
    private String payMethod;
    private Battery battery; // 정상 동작하는지 확인. 안되면 리스트로 변환해서 반환
//    private Zone zone; // 위와 동일   // zone to battery매핑 이후 적용

    public PayResDto(Payment payment) {
        this.paymentId = payment.getId();
        this.totalPrice = payment.getTotalPrice();
        this.payStatus = payment.getStatus();
        this.startTime = payment.getStartTime();
        this.endTime = payment.getEndTime();
        this.payMethod = payment.getPayMethod();
        this.battery = payment.getBattery();
//        this.zone = payment.getZone();
        setCreatedAt(payment.getCreatedAt());
        setModifiedAt(payment.getModifiedAt());
    }
}
