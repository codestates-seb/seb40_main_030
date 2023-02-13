package backend.domain.station.entity;

import backend.domain.battery.entity.Battery;
import backend.global.auditing.BaseTime;
import lombok.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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

    private String city;  // 추가된 부분

    private String region;  // 추가된 부분

    private Integer count;

    private List<Battery> batteryList = new ArrayList<>();

    public StationSearch(Integer confirmId,
                         Double latitude, Double longitude,
                         String city, String region,
                         String startTime, String endTime) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.confirmId = confirmId;
        this.city = city;
        this.region = region;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public StationSearch(String startTime, String endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public StationSearch(Station station) {
        this.id = station.getId();
        this.name = station.getName();
        this.details = station.getDetails();
        this.photoURL = station.getPhotoURL();
        this.phone = station.getPhone();
        this.latitude = station.getLatitude();
        this.longitude = station.getLongitude();
        this.confirmId = station.getConfirmId();
        this.city = station.getCity();
        this.region = station.getRegion();
        this.count = 0;
        this.batteryList = station.getBattery();
    }

    public void makeDefaultStationSearch() {
        this.latitude = 37.49655445;
        this.longitude = 127.02475418;
        this.confirmId = 1615822138;
        this.startTime = LocalDateTime.now().plusMinutes(10).format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"));
        this.endTime = LocalDateTime.now().plusMinutes(70).format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"));
    }
}
