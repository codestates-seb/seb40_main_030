package backend.domain.station.dto;

import backend.domain.station.entity.StationSearch;
import backend.global.auditing.BaseTime;
import lombok.Getter;
import lombok.Setter;


@Getter @Setter
public class StationSearchResDto extends BaseTime {

    private Long stationId;
    private String stationName;
    private String details;
    private double latitude;
    private double longitude;
    private String photoURL;
    private String phone;
    private Integer confirmId;
    private int availableBatteryCount = 0;
    private String startTime;
    private String endTime;

    public StationSearchResDto(StationSearch stationSearch) {
        this.stationId = stationSearch.getId();
        this.stationName = stationSearch.getName();
        this.details = stationSearch.getDetails();
        this.latitude = stationSearch.getLatitude();
        this.longitude = stationSearch.getLongitude();
        this.photoURL = stationSearch.getPhotoURL();
        this.phone = stationSearch.getPhone();
        this.confirmId = stationSearch.getConfirmId();
        this.availableBatteryCount = stationSearch.getCount();
        this.startTime = stationSearch.getStartTime();
        this.endTime = stationSearch.getEndTime();
        setCreatedAt(stationSearch.getCreatedAt());
        setModifiedAt(stationSearch.getModifiedAt());
    }

}
