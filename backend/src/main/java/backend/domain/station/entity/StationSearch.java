package backend.domain.station.entity;

import backend.domain.battery.entity.Battery;
import backend.global.auditing.BaseTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StationSearch extends BaseTime {

    private Long id;

    private String name;

    private String details;

    private String photoURL;

    private String phone;

    private Double latitude;

    private Double longitude;

    private Integer confirmId;

    private String startTime;

    private String endTime;

    private Integer count;

    private List<Battery> batteryList = new ArrayList<>();

    public StationSearch(Integer confirmId,
                         Double latitude, Double longitude,
                         String startTime, String endTime) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.confirmId = confirmId;
        this.startTime = startTime;
        this.endTime = endTime;
    }

}
