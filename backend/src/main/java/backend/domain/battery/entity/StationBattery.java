package backend.domain.battery.entity;

import backend.global.auditing.BaseTime;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter @Setter
public class StationBattery extends BaseTime {

    private Long batteryId;

    private String capacity;

    private boolean status;

    private int price;

    private String batteryName;

    private String photoURL;

}