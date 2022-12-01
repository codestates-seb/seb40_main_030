package backend.domain.payment.dto;

import backend.domain.payment.entity.PayStatus;
import backend.domain.payment.entity.Payment;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class PayBillsResDto {

    private Long batteryId;
    private String batteryName;
    private String capacity;
    private String batteryPhotoURL;
    private int price;

    private boolean batteryStatus;
    private PayStatus payStatus;
    private String startTime;
    private String endTime;
    private String returnTime;
    private String tid;
    private int totalPrice;

    private String stationName;

    public PayBillsResDto(Payment payment) {

        this.batteryId = payment.getBattery().getBatteryId();
        this.batteryName = payment.getBattery().getBatteryName();
        this.capacity = payment.getBattery().getCapacity();
        this.batteryPhotoURL = payment.getBattery().getPhotoURL();
        this.price = payment.getBattery().getPrice();
        this.batteryStatus = payment.getBattery().isStatus();

        this.payStatus = payment.getStatus();
        this.startTime = payment.getStartTime();
        this.endTime = payment.getEndTime();
        this.returnTime = payment.getReturnTime();
        this.tid = payment.getTid();
        this.totalPrice = payment.getTotalPrice();
        this.stationName = payment.getStation().getName();

    }



}
