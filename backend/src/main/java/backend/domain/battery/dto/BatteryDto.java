package backend.domain.battery.dto;

import backend.domain.battery.entity.Battery;
import backend.domain.battery.entity.Reservation;
import backend.domain.payment.entity.PayStatus;
import backend.domain.station.entity.Station;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class BatteryDto {
    @Getter
    @Setter
    public static class Post{
        @NotBlank(message = "용량을 입력해주세요.")
        private String capacity;

        @NotNull(message = "상태를 설정해주세요.")
        private boolean status;

        @NotNull(message = "가격을 입력해주세요.")
        private int price;

        @URL
        private String photoURL;
    }

    @Getter
    @Setter
    public static class Patch{
        private long batteryId;
        private boolean status;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response{
        private long batteryId;
        private String capacity;
        private boolean status;
        private int price;
        private String batteryName;
        private String photoURL;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private List<BatteryReservation> reservations;

        public Response(Battery battery){
            this.batteryId = battery.getBatteryId();
            this.capacity = battery.getCapacity();
            this.status = battery.isStatus();
            this.price = battery.getPrice();
            this.batteryName = battery.getBatteryName();
            this.photoURL = battery.getPhotoURL();
            this.createdAt = battery.getCreatedAt();
            this.modifiedAt = battery.getModifiedAt();
            this.reservations = BatteryReservation.batteryReservation(battery.getReservations());
        }

        @Getter
        public static class BatteryReservation{
            private Long reservationId;
            private String startTime;
            private String endTime;
            private LocalDateTime reservationCreatedAt;
            private LocalDateTime reservationModifiedAt;
            private PayStatus payStatus;
            private Long stationId;

            public static List<BatteryReservation> batteryReservation(List<Reservation> reservations){
                List<BatteryReservation> list = new ArrayList<>();
                reservations.forEach(reservation -> {
                    list.add(new BatteryReservation(reservation));
                });
                return list;
            }
            public BatteryReservation(Reservation reservation){
                this.reservationId = reservation.getReservationId();
                this.startTime = reservation.getStartTime();
                this.endTime = reservation.getEndTime();
                this.reservationCreatedAt = reservation.getCreatedAt();
                this.reservationModifiedAt = reservation.getModifiedAt();
                this.payStatus = reservation.getPayStatus();
                this.stationId = reservation.getStationId();
            }
        }
    }
}
