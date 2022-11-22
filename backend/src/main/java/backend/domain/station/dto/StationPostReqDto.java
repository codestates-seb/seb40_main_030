package backend.domain.station.dto;

import backend.domain.station.entity.Station;
import backend.domain.station.entity.StationLocation;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.ArrayList;

@Getter
@Setter
public class StationPostReqDto {

    @NotBlank(message = "대여소 이름은 필수입니다.")
    private String name;
    @NotBlank(message = "상세정보는 필수입니다.")
    private String details;
    private StationLocation location;
    @NotBlank(message = "이미지는 필수입니다.")
    private String photoURL;
    private String phone;

    public Station toStation() {
        Station station = new Station().builder()
                .name(this.name)
                .details(this.details)
                .latitude(this.location.getLatitude())
                .longitude(this.location.getLongitude())
                .photoURL(this.photoURL)
                .phone(this.phone)
                .battery(new ArrayList<>())
                .payment(new ArrayList<>())
                .build();
        station.setCreatedAt(LocalDateTime.now());
        station.setModifiedAt(LocalDateTime.now());

        return station;
    }
}