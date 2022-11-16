package backend.domain.zone.dto;

import backend.domain.zone.entity.Zone;
import backend.domain.zone.entity.ZoneLocation;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;

@Getter @Setter
public class ZonePatchReqDto {

    private String name;
    private String details;
    private ZoneLocation location;


    public Zone toZone(Long zoneId) {
        Zone zone = new Zone();
        zone.setId(zoneId);
        zone.setName(this.name);
        zone.setDetails(this.details);
        zone.setLatitude(this.location.getLatitude());
        zone.setLongitude(this.location.getLongitude());
        zone.setModifiedAt(LocalDateTime.now());

        return zone;
    }

}
