package backend.domain.member.entity;

import backend.domain.payment.entity.PayStatus;
import backend.global.auditing.BaseTime;
import lombok.*;


@AllArgsConstructor @NoArgsConstructor
@Builder @Getter @Setter
public class MemberPayment extends BaseTime {

    private Long id;

    private int totalPrice;

    private PayStatus status;

    private String startTime;

    private String endTime;

    private String payMethod;

    private String batteryName;

    private String batteryPhotoURL;

    private String stationName;

}