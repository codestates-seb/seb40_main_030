package backend.domain.station.dto;

import backend.domain.battery.entity.Battery;
import backend.domain.station.entity.Station;
import backend.domain.station.entity.StationLocation;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter @Setter
public class StationResDto {

    private Long id;
    private String name;
    private String details;
    private StationLocation location;
    private String photoURL;
    private String phone;
    private Integer confirmId;

    private String city;  // 추가된 부분
    private String region;  // 추가된 부분


    private List<Battery> batteries;

    public StationResDto(Station station) {
        this.id = station.getId();
        this.name = station.getName();
        this.details = station.getDetails();
        StationLocation location = new StationLocation();
        location.setLatitude(station.getLatitude());
        location.setLongitude(station.getLongitude());
        this.location = location;
        this.photoURL = station.getPhotoURL();
        this.phone = station.getPhone();
        this.confirmId = station.getConfirmId();

        this.city = station.getCity();  // 추가된 부분
        this.region = station.getRegion();  // 추가된 부분

        List<Battery> list = new ArrayList<>();
        for(int i=0 ; i< station.getBattery().size() ; i++) {
            Battery filteredbattery = new Battery();
            filteredbattery.setBatteryId(station.getBattery().get(i).getBatteryId());
            filteredbattery.setCapacity(station.getBattery().get(i).getCapacity());
            filteredbattery.setStatus(station.getBattery().get(i).isStatus());
            filteredbattery.setPrice(station.getBattery().get(i).getPrice());
            filteredbattery.setDefaultPrice(station.getBattery().get(i).getDefaultPrice());
            filteredbattery.setBatteryName(station.getBattery().get(i).getBatteryName());
            filteredbattery.setPhotoURL(station.getBattery().get(i).getPhotoURL());
            filteredbattery.setCreatedAt(station.getBattery().get(i).getCreatedAt());
            filteredbattery.setModifiedAt(station.getBattery().get(i).getModifiedAt());
            filteredbattery.setBatteryName(station.getBattery().get(i).getBatteryName());
            filteredbattery.setReservations(station.getBattery().get(i).getReservations());
            list.add(filteredbattery);
        }
        this.batteries = list;

    }
}