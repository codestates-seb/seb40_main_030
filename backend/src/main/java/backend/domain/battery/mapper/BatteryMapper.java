package backend.domain.battery.mapper;

import backend.domain.battery.dto.BatteryDto;
import backend.domain.battery.entity.Battery;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BatteryMapper {
    Battery batteryPostDtoToBattery(BatteryDto.Post requestBody);
    Battery batteryPatchDtoToBattery(BatteryDto.Patch requestBody);
    BatteryDto.Response batteryToBatteryResponse(Battery battery);
    List<BatteryDto.Response> batteryToBatteryResponse(List<Battery> batteries);
}
