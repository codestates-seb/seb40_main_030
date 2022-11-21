package backend.domain.battery.entity;

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

    public void addBattery(Battery battery){
        this.battery = battery;
        if(!this.battery.getReservations().contains(this)){
            this.battery.getReservations().add(this);
        }
    }
}