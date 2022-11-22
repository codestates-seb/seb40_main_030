package backend.domain.station.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
public class StationBatteryReqDto {

    private String startTime;

    private String endTime;

}
