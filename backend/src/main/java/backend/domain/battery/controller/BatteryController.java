package backend.domain.battery.controller;

import backend.domain.battery.dto.BatteryDto;
import backend.domain.battery.entity.Battery;
import backend.domain.battery.mapper.BatteryMapper;
import backend.domain.battery.service.BatteryService;
import backend.global.dto.PageInfoDto;
import backend.global.dto.SingleResDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/batteries")
@Validated
@Slf4j
public class BatteryController {
    private final BatteryService batteryService;
    private final BatteryMapper mapper;

    public BatteryController(BatteryService batteryService, BatteryMapper mapper){
        this.batteryService = batteryService;
        this.mapper = mapper;
    }

    // 배터리 정보 등록
    @PostMapping
    public ResponseEntity postBattery(@Valid @RequestBody BatteryDto.Post requestBody){
        Battery battery = mapper.batteryPostDtoToBattery(requestBody);
        Battery createBattery = batteryService.createBattery(battery);
        BatteryDto.Response response = mapper.batteryToBatteryResponse(createBattery);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    // 해당 ID 배터리 수정
    @PatchMapping("/{batteryId}")
    public ResponseEntity patchBattery(@PathVariable("batteryId") @Positive long batteryId,
                                       @Valid @RequestBody BatteryDto.Patch requestBody){
        requestBody.setBatteryId(batteryId);
        Battery battery = mapper.batteryPatchDtoToBattery(requestBody);
        Battery updateBattery = batteryService.updateBattery(battery);
        BatteryDto.Response response = mapper.batteryToBatteryResponse(updateBattery);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 해당 ID 배터리 조회
    @GetMapping("/{batteryId}")
    public ResponseEntity getBattery(@PathVariable("batteryId") @Positive long batteryId){
        Battery battery = batteryService.findBattery(batteryId);
        BatteryDto.Response response = mapper.batteryToBatteryResponse(battery);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 배터리 전체 조회
    @GetMapping
    public ResponseEntity getBatteries(Pageable pageable){
        Page<Battery> page = batteryService.findBatteries(pageable);

        return new ResponseEntity<>(new PageInfoDto<>(page), HttpStatus.OK);
    }

    //해당 ID 배터리 삭제
    @DeleteMapping("/{batteryId}")
    public ResponseEntity deleteBattery(@PathVariable("batteryId") @Positive long batteryId){
        batteryService.deleteBattery(batteryId);
        return new ResponseEntity<>(new SingleResDto<>("Success Delete"), HttpStatus.OK);
    }
}
