package backend.domain.battery.entity;

import backend.domain.payment.entity.PayStatus;
import backend.domain.payment.entity.Payment;
import backend.global.auditing.BaseTime;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Reservation extends BaseTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reservationId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "battery_id")
    @JsonBackReference
    private Battery battery;

    @Column
    private String startTime;

    @Column
    private String endTime;

    @Column
    private PayStatus payStatus;

    @Column
    private Long stationId;

    @ManyToOne(fetch =FetchType.LAZY)
    @JoinColumn(name = "payment_id")
    @JsonBackReference
    private Payment payment;

    public void addBattery(Battery battery){
        this.battery = battery;
        if(!this.battery.getReservations().contains(this)){
            this.battery.getReservations().add(this);
        }
    }

//    public void addPayment(Payment payment){
//        this.payment = payment;
//        if(!this.payment.getReservations().contains(this)){
//            this.payment.getReservations().add(this);
//        }
//    }
}