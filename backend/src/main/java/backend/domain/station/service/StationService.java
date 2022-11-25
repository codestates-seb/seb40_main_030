package backend.domain.station.service;

import backend.domain.battery.entity.Battery;
import backend.domain.battery.repository.BatteryRepository;
import backend.domain.station.dto.StationBatteryReqDto;
import backend.domain.station.entity.Station;
import backend.domain.station.repository.StationRepository;
import backend.global.exception.dto.BusinessLogicException;
import backend.global.exception.exceptionCode.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class StationService {

    private final StationRepository stationRepository;

    @Transactional
    public Station postStation(Station station) {

        return stationRepository.save(station);
    }

    @Transactional
    public Station patchStation(Station station) {
        Station savedStation = stationRepository.findById(station.getId())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.STATION_NOT_FOUND));

        Optional.ofNullable(station.getName()).ifPresent(savedStation::setName);
        Optional.ofNullable(station.getDetails()).ifPresent(savedStation::setDetails);
        Optional.of(station.getLatitude()).ifPresent(savedStation::setLatitude);
        Optional.of(station.getLongitude()).ifPresent(savedStation::setLongitude);
        Optional.ofNullable(station.getPhotoURL()).ifPresent(savedStation::setPhotoURL);
        Optional.ofNullable(station.getPhone()).ifPresent(savedStation::setPhone);
        Optional.ofNullable(station.getConfirmId()).ifPresent(savedStation::setConfirmId);

        return stationRepository.save(savedStation);
    }

    @Transactional
    public void deleteStation(Long stationId) {
        Station existStation = stationRepository.findById(stationId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.STATION_NOT_FOUND));
        stationRepository.delete(existStation);
    }


    public Station getStation(Long stationId) {
        return stationRepository.findById(stationId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND));

    }


    public Page<Station> getStations(Pageable pageable) {
        Page<Station> page = stationRepository.findAllByOrderByCreatedAtDesc(pageable);

        return page;
    }

    public Station getStationBattery(Long stationId, StationBatteryReqDto request) {
        Station station = stationRepository.findById(stationId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.STATION_NOT_FOUND));

        LocalDateTime startTime = LocalDateTime.parse(request.getStartTime());
        LocalDateTime endTime = LocalDateTime.parse(request.getEndTime());

        List<Battery> availableBatteryList = new ArrayList<>();
        List<Battery> unavailableBatteryList = new ArrayList<>();
        for (int i = 0; i < station.getBattery().size(); i++) {
            for (int j = 0; j < station.getBattery().get(i).getReservations().size(); j++) {
                Battery candidate = station.getBattery().get(i);

                if (LocalDateTime.parse(candidate.getReservations().get(j).getStartTime()).isAfter(startTime)
                        && LocalDateTime.parse(candidate.getReservations().get(j).getStartTime()).isBefore(endTime)
                ) {
                    if (!unavailableBatteryList.contains(candidate)) {
                        unavailableBatteryList.add(candidate);
                    }
                }
                else if (LocalDateTime.parse(candidate.getReservations().get(j).getEndTime()).isBefore(startTime)) {
                    if (!unavailableBatteryList.contains(candidate)) {
                        unavailableBatteryList.add(candidate);
                    }
                }
                else {
                    if(!availableBatteryList.contains(candidate)) {
                        availableBatteryList.add(candidate);
                    }
                }
            }
        }

        List<Battery> list = availableBatteryList.stream().filter(battery -> !unavailableBatteryList.contains(battery)).collect(Collectors.toList());

        station.setBattery(list);

        return station;
    }

    public Page<Station> getStationsSearch (Pageable pageable, Station station) {
        // 기본 주소는 코드스테이츠
        Station defaultStation = new Station().builder()
                .latitude(127.02475418)
                .longitude(127.02475418)
                .confirmId(1615822138)  // 건물 Id
                .build();

        // 만약 위경도 값이나 confirmId가 들어오면 그 값으로 객체 필드값 변경
        Optional.of(station.getLatitude()).ifPresent(defaultStation::setLatitude);
        Optional.of(station.getLongitude()).ifPresent(defaultStation::setLongitude);
        Optional.ofNullable(station.getConfirmId()).ifPresent(defaultStation::setConfirmId);

        // 객체 필드값을 중점으로 해서 반경검색 구현하기

        return null;
    }

}