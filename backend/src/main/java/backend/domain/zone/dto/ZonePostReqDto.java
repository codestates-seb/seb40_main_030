package backend.domain.zone.dto;

import backend.domain.zone.entity.Zone;
import backend.domain.zone.entity.ZoneLocation;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ZonePostReqDto {

    private String name;
    private String details;
    private ZoneLocation location;

    private String photoURL;

    public Zone toZone() {
        Zone zone = new Zone().builder()
                .name(this.name)
                .details(this.details)
                .latitude(this.location.getLatitude())
                .longitude(this.location.getLongitude())
                .photoURL(this.photoURL)
                .build();
        zone.setCreatedAt(LocalDateTime.now());
        zone.setModifiedAt(LocalDateTime.now());

        return zone;
    }
}
