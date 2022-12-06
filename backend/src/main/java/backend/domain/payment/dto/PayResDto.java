package backend.domain.payment.dto;

import backend.domain.battery.entity.Battery;
import backend.domain.payment.entity.PayStatus;
import backend.domain.payment.entity.Payment;
import backend.domain.station.entity.Station;
import backend.global.auditing.BaseTime;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class PayResDto extends BaseTime {

    private Long paymentId;
    private int totalPrice;
    private PayStatus payStatus;
    private String startTime;
    private String endTime;
    private String returnTime;
    private String tid;
    private String payMethod;
    private Battery battery;
    private Station station;

    public PayResDto(Payment payment) {
        this.paymentId = payment.getId();
        this.totalPrice = payment.getTotalPrice();
        this.payStatus = payment.getStatus();
        this.startTime = payment.getStartTime();
        this.endTime = payment.getEndTime();
        this.returnTime = payment.getReturnTime();
        this.tid = payment.getTid();
        this.payMethod = payment.getPayMethod();
        this.battery = payment.getBattery();
        setCreatedAt(payment.getCreatedAt());
        setModifiedAt(payment.getModifiedAt());

        Battery battery = new Battery();
        battery.setBatteryId(payment.getBattery().getBatteryId());
        battery.setCapacity(payment.getBattery().getCapacity());
        battery.setStatus(payment.getBattery().isStatus());
        battery.setPrice(payment.getBattery().getPrice());
        battery.setBatteryName(payment.getBattery().getBatteryName());
        battery.setPhotoURL(payment.getBattery().getPhotoURL());
        battery.setCreatedAt(payment.getBattery().getCreatedAt());
        battery.setModifiedAt(payment.getBattery().getModifiedAt());
        battery.setReservations(payment.getBattery().getReservations());
        this.battery = battery;

        Station station = new Station().builder()
                .id(payment.getStation().getId())
                .name(payment.getStation().getName())
                .details(payment.getStation().getDetails())
                .latitude(payment.getStation().getLatitude())
                .longitude(payment.getStation().getLongitude())
                .photoURL(payment.getStation().getPhotoURL())
                .phone(payment.getStation().getPhone())
                .build();
        station.setCreatedAt(payment.getStation().getCreatedAt());
        station.setModifiedAt(payment.getStation().getModifiedAt());
        this.station = station;
    }
}
