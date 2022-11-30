package backend.domain.battery.controller;

import backend.domain.battery.dto.BatteryDto;
import backend.domain.battery.entity.Battery;
import backend.domain.battery.mapper.BatteryMapper;
import backend.domain.battery.service.BatteryService;
import backend.global.dto.PageInfoDto;
import backend.global.dto.SingleResDto;
import backend.global.security.utils.JwtExtractUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
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

    private final JwtExtractUtils jwtExtractUtils;

    public BatteryController(BatteryService batteryService, BatteryMapper mapper, JwtExtractUtils jwtExtractUtils){
        this.batteryService = batteryService;
        this.mapper = mapper;
        this.jwtExtractUtils = jwtExtractUtils;
    }

    // 배터리 정보 등록
    @PostMapping
    public ResponseEntity postBattery(HttpServletRequest request,
                                      @Valid @RequestBody BatteryDto.Post requestBody){
        String adminEmail = jwtExtractUtils.extractEmailFromJwt(request);
        Battery battery = mapper.batteryPostDtoToBattery(requestBody);
        long stationId = requestBody.getStationId();
        Battery createBattery = batteryService.createBattery(battery, stationId, adminEmail);
//        BatteryDto.Response response = mapper.batteryToBatteryResponse(createBattery);
        BatteryDto.Response response = new BatteryDto.Response(createBattery);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    // 해당 ID 배터리 수정
    @PatchMapping("/{batteryId}")
    public ResponseEntity patchBattery(HttpServletRequest request,
                                       @PathVariable("batteryId") @Positive long batteryId,
                                       @RequestBody BatteryDto.Patch requestBody){
        String adminEmail = jwtExtractUtils.extractEmailFromJwt(request);
        Battery battery = requestBody.toBattery();
        battery.setBatteryId(batteryId);
        Battery updateBattery = batteryService.updateBattery(battery, adminEmail);
        BatteryDto.Response response = new BatteryDto.Response(updateBattery);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 해당 ID 배터리 조회
    @GetMapping("/{batteryId}")
    public ResponseEntity getBattery(@PathVariable("batteryId") @Positive long batteryId){
        Battery battery = batteryService.findBattery(batteryId);
//        BatteryDto.Response response = mapper.batteryToBatteryResponse(battery);
        BatteryDto.Response response = new BatteryDto.Response(battery);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 배터리 전체 조회
    @GetMapping
    public ResponseEntity<PageInfoDto> getBatteries(Pageable pageable){
        Page<Battery> page = batteryService.findBatteries(pageable);

        return new ResponseEntity<>(new PageInfoDto<>(page), HttpStatus.OK);
    }

    //해당 ID 배터리 삭제
    @DeleteMapping("/{batteryId}")
    public ResponseEntity deleteBattery(HttpServletRequest request,
                                        @PathVariable("batteryId") @Positive long batteryId){
        String adminEmail = jwtExtractUtils.extractEmailFromJwt(request);
        batteryService.deleteBattery(batteryId, adminEmail);
        return new ResponseEntity<>(new SingleResDto<>("Success Delete"), HttpStatus.OK);
    }
}
