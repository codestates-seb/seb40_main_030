package backend.domain.payment.dto;

import backend.domain.payment.entity.Payment;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class NearReservationDto {
    //    private Long paymentId;
//    private String endTime;
    private String possibleEndTime;
    public NearReservationDto(String possibleExtendTime){

//        this.paymentId = payment.getId();
//        this.endTime = payment.getEndTime();
        this.possibleEndTime = possibleExtendTime;
    }
}
