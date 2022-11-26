package backend.domain.station.dto;

import backend.domain.station.entity.StationSearch;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class StationSearchReqDto {

    private Double latitude;
    private Double longitude;
    private Integer confirmId;
    private String startTime;
    private String endTime;


    public StationSearch toStationSearch() {
        StationSearch stationSearch = new StationSearch();
        stationSearch.setLatitude(this.latitude);
        stationSearch.setLongitude(this.longitude);
        stationSearch.setConfirmId(this.confirmId);
        stationSearch.setStartTime(this.startTime);
        stationSearch.setEndTime(this.endTime);
        return stationSearch;
    }

}
