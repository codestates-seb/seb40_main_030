package backend.domain.station.dto;

import backend.domain.station.entity.Station;
import backend.domain.station.entity.StationLocation;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class StationPatchReqDto {

    private String name;
    private String details;
    private StationLocation location;
    private String photoURL;
    private String phone;
    private Integer confirmId;

    public Station toStation(Long stationId) {
        Station station = new Station().builder()
                .id(stationId)
                .name(this.name)
                .details(this.details)
                .latitude(this.location.getLatitude())
                .longitude(this.location.getLongitude())
                .photoURL(this.photoURL)
                .phone(this.phone)
                .confirmId(this.confirmId)
                .build();
        station.setModifiedAt(LocalDateTime.now());

        return station;
    }

}