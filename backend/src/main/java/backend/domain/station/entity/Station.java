package backend.domain.station.entity;

import backend.domain.admin.entity.Admin;
import backend.domain.battery.entity.Battery;
import backend.domain.payment.entity.Payment;
import backend.global.auditing.BaseTime;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@AllArgsConstructor @NoArgsConstructor
@Entity @Getter @Setter @Builder
public class Station extends BaseTime {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "station_id")
    private Long id;

    private String name;

    private String details;

    private double latitude;

    private double longitude;

    private String photoURL;

    private String phone;

    @OneToMany(mappedBy = "station", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @JsonManagedReference
    private List<Battery> battery;

    @OneToMany(mappedBy = "station")
    @JsonManagedReference
    private List<Payment> payment;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "admin_id")
    @JsonBackReference
    private Admin admin;

    public void addAdmin(Admin admin){
        this.admin = admin;
        if(!this.admin.getStationList().contains(this)){
            this.admin.getStationList().add(this);
        }
    }
}