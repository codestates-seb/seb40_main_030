package backend.domain.zone.dto;

import backend.domain.zone.entity.Zone;
import backend.domain.zone.entity.ZoneLocation;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ZoneResDto {

    private Long id;
    private String name;
    private String details;
    private ZoneLocation location;

    public ZoneResDto(Zone zone) {
        this.id = zone.getId();
        this.name = zone.getName();
        this.details = zone.getDetails();
        ZoneLocation location = new ZoneLocation();
        location.setLatitude(zone.getLatitude());
        location.setLongitude(zone.getLongitude());
        this.location = location;
    }
}
