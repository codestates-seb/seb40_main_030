package backend.domain.payment.dto;

import backend.domain.payment.entity.Payment;
import lombok.Getter;
import lombok.Setter;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter @Setter
public class ExtendTimeDto {
    private String endTime;
    private String extendTime;
    private boolean extended = true;
    private int extendPrice;


    public ExtendTimeDto(Payment payment){
        this.endTime = payment.getEndTime();
        this.extendTime = payment.getReservations().get(0).getEndTime();
        this.extendPrice = caculateCharge(payment);
    }

    private int caculateCharge(Payment payment){
        String extendTime = payment.getReservations().get(0).getEndTime();
        String endTime = payment.getEndTime();
        int price = payment.getBattery().getPrice();

        // 총 금액 계산 로직
        // startTime과 endTime을 분단위로 환산 (절대 시간 계산?)
        // String을 LocalDateTime으로 변환 -> 시간 비교 -> 분단위 환산  (endTime - startTime의 분단위 값)
        DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm");
        LocalDateTime end = LocalDateTime.parse(endTime, format);
        LocalDateTime extend = LocalDateTime.parse(extendTime, format);
        Duration diff = Duration.between(end, extend);
        int diffMin = (int) diff.toMinutes();

        // 2. 총 금액 = 기본 단위 가격 * 총 대여시간(min) / 10(min)
        return price * (diffMin / 10);

    }

}
