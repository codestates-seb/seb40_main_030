package backend.domain.battery.entity;

import backend.domain.station.entity.Station;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Battery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long batteryId;

    @Column
    private String capacity;

    @Column
    private boolean status;

    @Column
    private int price;

    @Column
    private int defaultPrice;

    @Column
    private String batteryName;

    @URL
    @Column
    private String photoURL;

    @ManyToOne
    @JoinColumn(name = "station_id")
    @JsonBackReference
    private Station station;

    @OneToMany(mappedBy = "battery", cascade = CascadeType.ALL) // PERSIST인지 확인 필요
    @JsonManagedReference
    private List<Reservation> reservations = new ArrayList<>();

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false, name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    public void addReservation(Reservation reservation){
        this.reservations.add(reservation);
        if(reservation.getBattery() != this){
            reservation.setBattery(this);
        }
    }
}
