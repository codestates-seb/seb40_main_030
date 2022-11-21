package backend.domain.station.dto;

import backend.domain.station.entity.Station;
import backend.domain.station.entity.StationLocation;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;

@Getter
@Setter
public class StationPostReqDto {

    private String name;
    private String details;
    private StationLocation location;
    private String photoURL;

    public Station toStation() {
        Station station = new Station().builder()
                .name(this.name)
                .details(this.details)
                .latitude(this.location.getLatitude())
                .longitude(this.location.getLongitude())
                .photoURL(this.photoURL)
                .battery(new ArrayList<>())
                .payment(new ArrayList<>())
                .build();
        station.setCreatedAt(LocalDateTime.now());
        station.setModifiedAt(LocalDateTime.now());

        return station;
    }
}