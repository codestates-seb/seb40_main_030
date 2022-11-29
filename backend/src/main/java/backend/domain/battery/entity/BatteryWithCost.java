package backend.domain.battery.entity;

import backend.global.auditing.BaseTime;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter @Setter
public class BatteryWithCost extends BaseTime {

    private Long batteryId;

    private String capacity;

    private boolean status;

    private int price;

    private int defaultPrice;

    private String batteryName;

    private String photoURL;

    private int totalCharge;

    private List<Reservation> reservations = new ArrayList<>();

}
