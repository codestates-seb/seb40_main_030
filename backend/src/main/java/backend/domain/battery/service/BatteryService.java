package backend.domain.battery.service;

import backend.domain.battery.entity.Battery;
import backend.domain.battery.repository.BatteryRepository;
import backend.global.exception.dto.BusinessLogicException;
import backend.global.exception.exceptionCode.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class BatteryService {
    private final BatteryRepository batteryRepository;

    public BatteryService(BatteryRepository batteryRepository){
        this.batteryRepository = batteryRepository;
    }

    // 배터리 등록
    public Battery createBattery(Battery battery){
        return batteryRepository.save(battery);
    }

    // 배터리 수정
    public Battery updateBattery(long batteryId){
        Battery findBattery = findVerifiedBattery(batteryId);
        if(!findBattery.isStatus()){
            findBattery.setStatus(true);
        }else{
            findBattery.setStatus(false);
        }
        findBattery.setModifiedAt(LocalDateTime.now());

        return batteryRepository.save(findBattery);
    }

    // 해당 ID 배터리 조회
    public Battery findBattery(long batteryId){
        Battery findBattery = findVerifiedBattery(batteryId);
        findBattery.setCreatedAt(findBattery.getCreatedAt());

        return findBattery;
    }

    // 배터리 전체 조회
    public Page<Battery> findBatteries(Pageable pageable){
        return batteryRepository.findAllByOrderByCreatedAtDesc(pageable);
    }

    // 해당 ID 배터리 삭제
    public void deleteBattery(long batteryId){
        Battery findBattery = findVerifiedBattery(batteryId);
        batteryRepository.delete(findBattery);
    }


    // 해당 ID의 배터리가 존재하는지 검증
    private Battery findVerifiedBattery(long batteryId) {
        Optional<Battery> optionalBattery = batteryRepository.findById(batteryId);
        Battery findBattery = optionalBattery.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.BATTERY_NOT_FOUND));
        return findBattery;
    }
}
