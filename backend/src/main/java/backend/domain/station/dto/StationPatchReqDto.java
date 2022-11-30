package backend.domain.station.dto;

import backend.domain.station.entity.Station;
import backend.domain.station.entity.StationLocation;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Getter
@Setter
public class StationPatchReqDto {

    @NotBlank(message = "대여소명을 입력해주세요.")
    private String name;
    @NotBlank(message = "대여소 설명을 입력해주세요.")
    private String details;
    @NotNull(message = "위치값이 필요합니다.")
    private StationLocation location;
    @URL @NotBlank(message = "사진을 등록해주세요.")
    private String photoURL;
    @NotBlank(message = "전화번호를 입력해주세요.")
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