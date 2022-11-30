package backend.domain.station.dto;

import backend.domain.battery.entity.Battery;
import backend.domain.station.entity.StationLocation;
import backend.domain.station.entity.StationSearch;
import backend.global.auditing.BaseTime;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter @Setter
public class StationSearchResDto extends BaseTime {

    private Long id;
    private String name;
    private String details;
    private StationLocation location;
    private String photoURL;
    private String phone;
    private Integer confirmId;
    private int availableBatteryCount = 0;
    private String startTime;
    private String endTime;
    private List<Battery> batteries;

    public StationSearchResDto(StationSearch stationSearch) {
        setCreatedAt(stationSearch.getCreatedAt());
        setModifiedAt(stationSearch.getModifiedAt());
        this.id = stationSearch.getId();
        this.name = stationSearch.getName();
        this.details = stationSearch.getDetails();
        StationLocation location = new StationLocation();
        location.setLatitude(stationSearch.getLatitude());
        location.setLatitude(stationSearch.getLongitude());
        this.location = location;
        this.photoURL = stationSearch.getPhotoURL();
        this.phone = stationSearch.getPhone();
        this.confirmId = stationSearch.getConfirmId();
        this.availableBatteryCount = stationSearch.getCount();
        this.startTime = stationSearch.getStartTime();
        this.endTime = stationSearch.getEndTime();
        this.batteries = stationSearch.getBatteryList();
    }

}
