package backend.domain.station.dto;

import backend.domain.station.entity.Station;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class StationSearchReqDto {

    private double latitude;
    private double longitude;
    private int confirmId;

    // Station에 confirmId 필드 추가하기 논의
    public Station toStation() {
        return new Station().builder()
                .latitude(this.latitude)
                .longitude(this.longitude)
//                .confirmId(this.itemId)
                .build();
    }

}
