package backend.domain.station.dto;

import backend.domain.battery.entity.BatteryWithCost;
import backend.domain.station.entity.Station;
import backend.domain.station.entity.StationLocation;
import lombok.Getter;
import lombok.Setter;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter
public class StationBatteryResDto {

    private Long id;
    private String name;
    private String details;
    private StationLocation location;
    private String photoURL;
    private String phone;
    private Integer confirmId;
    private List<BatteryWithCost> batteries;

    public StationBatteryResDto(Station station, String startTime, String endTime) {
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

        List<BatteryWithCost> list = new ArrayList<>();
        for(int i=0 ; i< station.getBattery().size() ; i++) {
            BatteryWithCost filteredbattery = new BatteryWithCost();
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
            filteredbattery.setTotalCharge(calculateTotalCharge(station.getBattery().get(i).getPrice(), startTime, endTime));
            list.add(filteredbattery);
        }
        this.batteries = list;

    }

    public int calculateTotalCharge(int charge, String start, String end) {

        // 총 금액 계산 로직
        // startTime과 endTime을 분단위로 환산 (절대 시간 계산?)
        // String을 LocalDateTime으로 변환 -> 시간 비교 -> 분단위 환산  (endTime - startTime의 분단위 값)
        DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm");
        LocalDateTime startTime = LocalDateTime.parse(start, format);
        LocalDateTime endTime = LocalDateTime.parse(end, format);
        Duration diff = Duration.between(startTime, endTime);
        int diffMin = (int) diff.toMinutes();

        // 2. 총 금액 = 기본 단위 가격 * 총 대여시간(min) / 10(min)
        return charge * (diffMin / 10);

    }
}