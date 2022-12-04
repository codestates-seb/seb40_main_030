package backend.domain.battery.service;

import backend.domain.admin.entity.Admin;
import backend.domain.admin.repository.AdminRepository;
import backend.domain.battery.entity.Battery;
import backend.domain.battery.repository.BatteryRepository;
import backend.domain.station.entity.Station;
import backend.domain.station.repository.StationRepository;
import backend.global.exception.dto.BusinessLogicException;
import backend.global.exception.exceptionCode.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Transactional(readOnly = true)
@Service //@RequiredArgsConstructor
public class BatteryService {
    private final BatteryRepository batteryRepository;
    private final StationRepository stationRepository;
    private final AdminRepository adminRepository;
    @Value("${mail.address.admin.list}")
    private List<String> adminMailAddress;

    public BatteryService(BatteryRepository batteryRepository, StationRepository stationRepository,  AdminRepository adminRepository){
        this.batteryRepository = batteryRepository;
        this.stationRepository = stationRepository;
        this.adminRepository = adminRepository;
    }

    // 배터리 등록
    @Transactional
    public Battery createBattery(Battery battery, long stationId, String adminEmail){
        Station station = stationRepository.findById(stationId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.STATION_NOT_FOUND));

        // 로그인한 계정이 ADMIN인지 검증하는 로직
        if(!adminMailAddress.contains(adminEmail)) throw new BusinessLogicException(ExceptionCode.NON_ACCESS_AUTH);

        // 로그인 한 Admin이 실제 그 station의 주인인지 검증
        verifyAdmin(station.getAdmin().getAdminId(),adminEmail);

        battery.setStation(station);
        return batteryRepository.save(battery);
    }

    // 배터리 수정
    @Transactional
    public Battery updateBattery(Battery battery, String adminEmail){
        Battery findBattery = findVerifiedBattery(battery.getBatteryId());

        // 로그인한 계정이 ADMIN인지 검증하는 로직
        if(!adminMailAddress.contains(adminEmail)) throw new BusinessLogicException(ExceptionCode.NON_ACCESS_AUTH);

        // 로그인 한 Admin이 실제 그 station의 주인인지 검증
        verifyAdmin(findBattery.getStation().getAdmin().getAdminId(), adminEmail);

        Optional.ofNullable(battery.getPrice()).ifPresent(findBattery::setPrice);
        Optional.ofNullable(battery.isStatus()).ifPresent(findBattery::setStatus);
        Optional.ofNullable(battery.getDefaultPrice()).ifPresent(findBattery::setDefaultPrice);

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
    @Transactional
    public void deleteBattery(long batteryId, String adminEmail){
        Battery findBattery = findVerifiedBattery(batteryId);

        // 로그인한 계정이 ADMIN인지 검증하는 로직
        if(!adminMailAddress.contains(adminEmail)) throw new BusinessLogicException(ExceptionCode.NON_ACCESS_AUTH);

        // 로그인 한 Admin이 실제 그 station의 주인인지 검증
        verifyAdmin(findBattery.getStation().getAdmin().getAdminId(), adminEmail);

        batteryRepository.delete(findBattery);
    }


    // 해당 ID의 배터리가 존재하는지 검증
    private Battery findVerifiedBattery(long batteryId) {
        Optional<Battery> optionalBattery = batteryRepository.findById(batteryId);
        Battery findBattery = optionalBattery.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.BATTERY_NOT_FOUND));
        return findBattery;
    }

    private void verifyAdmin (Long savedAdminId, String adminEmail) {
        Admin admin = adminRepository.findByEmail(adminEmail)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ADMIN_NOT_FOUND));
        if(savedAdminId!=admin.getAdminId()){
            throw new BusinessLogicException(ExceptionCode.NON_ACCESS_MODIFY);
        }
    }
}
