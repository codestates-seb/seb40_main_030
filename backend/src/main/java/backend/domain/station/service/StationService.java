package backend.domain.station.service;

import backend.domain.battery.entity.Battery;
import backend.domain.battery.entity.Reservation;
import backend.domain.station.dto.StationBatteryReqDto;
import backend.domain.station.entity.Station;
import backend.domain.station.entity.StationSearch;
import backend.domain.station.repository.StationRepository;
import backend.global.exception.dto.BusinessLogicException;
import backend.global.exception.exceptionCode.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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
                } else if (LocalDateTime.parse(candidate.getReservations().get(j).getEndTime()).isBefore(startTime)) {
                    if (!unavailableBatteryList.contains(candidate)) {
                        unavailableBatteryList.add(candidate);
                    }
                } else {
                    if (!availableBatteryList.contains(candidate)) {
                        availableBatteryList.add(candidate);
                    }
                }
            }
        }

        List<Battery> list = availableBatteryList.stream().filter(battery -> !unavailableBatteryList.contains(battery)).collect(Collectors.toList());

        station.setBattery(list);

        return station;
    }

    public List<StationSearch> getStationsSearch(StationSearch search) {
        // 기본 주소는 코드스테이츠
        StationSearch defaultStation = new StationSearch();
        // default 위치 설정
        defaultStation.setLatitude(127.02475418);
        defaultStation.setLongitude(37.49655445);
        defaultStation.setConfirmId(1615822138);  // 건물 Id
        // default 시간 설정 (30분 간격)
        String defaultStartTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"));
        String defaultEndTime = LocalDateTime.now().plusMinutes(30).format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"));
        defaultStation.setStartTime(defaultStartTime);
        defaultStation.setEndTime(defaultEndTime);

//        // 입력된 예약시간
//        LocalDateTime inputStartTime = LocalDateTime.parse(search.getStartTime());
//        LocalDateTime inputEndTime = LocalDateTime.parse(search.getEndTime());

        // 만약 위경도 값 or confirmId or 시간변경값 들어오면 그 값으로 객체 필드값 변경
        Optional.of(search.getLatitude()).ifPresent(defaultStation::setLatitude);
        Optional.of(search.getLongitude()).ifPresent(defaultStation::setLongitude);
        Optional.ofNullable(search.getConfirmId()).ifPresent(defaultStation::setConfirmId);
        Optional.ofNullable(search.getStartTime()).ifPresent(defaultStation::setStartTime);
        Optional.ofNullable(search.getEndTime()).ifPresent(defaultStation::setEndTime);

        // 객체 필드값을 중점으로 해서 반경검색 구현하기
        Double minLat = defaultStation.getLatitude() - 0.01171531;  // 위/아래 역 하나정도의 거리차이 = 0.00912237 == 0.01
        Double maxLat = defaultStation.getLatitude() + 0.01171531;
        Double minLog = defaultStation.getLongitude() - 0.01171531;  // 좌/우 역 하나정도의 거리차이 = 0.01171529 == 0.01
        Double maxLog = defaultStation.getLongitude() + 0.01171531;

        List<Station> originList = stationRepository.findAllByOrderByCreatedAtDesc();
        List<Station> filteredList = originList.stream()
                .filter(a -> a.getLatitude() >= minLat || a.getLatitude() <= maxLat)
                .filter(b -> b.getLongitude() >= minLog || b.getLongitude() <= maxLog)
                .collect(Collectors.toList());

        // Station을 StationSearch로 변환
        List<StationSearch> searchList = new ArrayList<>();
        for (int i = 0; i < filteredList.size(); i++) {
            Station tempStation = filteredList.get(i);
            StationSearch stationSearch
                    = new StationSearch(tempStation.getId(), tempStation.getName(), tempStation.getDetails(),
                    tempStation.getPhotoURL(), tempStation.getPhone(), tempStation.getLatitude(),
                    tempStation.getLongitude(), tempStation.getConfirmId(),
                    defaultStation.getStartTime(), defaultStation.getEndTime(), 0,
                    tempStation.getBattery());
            stationSearch.setCreatedAt(tempStation.getCreatedAt());
            stationSearch.setModifiedAt(tempStation.getModifiedAt());

            searchList.add(stationSearch);
        }

        // StationSearch리스트에서 가용시간 비교
        LocalDateTime startT = LocalDateTime.parse(defaultStation.getStartTime());
        LocalDateTime endT = LocalDateTime.parse(defaultStation.getEndTime());
        for (int i = 0; i < searchList.size(); i++) {
            List<Battery> availableBatteryList = searchList.get(i).getBatteryList();
            List<Battery> unavailableBatteryList = new ArrayList<>();
            for (int j = 0; j < searchList.get(i).getBatteryList().size(); j++) {
                Battery battery = searchList.get(i).getBatteryList().get(j);
                for (int k = 0; k < searchList.get(i).getBatteryList().get(j).getReservations().size(); k++) {
                    Reservation reservation = searchList.get(i).getBatteryList().get(j).getReservations().get(k);
                    if (startT.isBefore(LocalDateTime.parse(reservation.getStartTime()))
                            && endT.isAfter(LocalDateTime.parse(reservation.getStartTime()))) {
                        if (!unavailableBatteryList.contains(battery)) {
                            unavailableBatteryList.add(battery);
                        }
                    } else if (startT.isAfter(LocalDateTime.parse(reservation.getStartTime()))
                            && startT.isBefore(LocalDateTime.parse(reservation.getEndTime()))
                            && endT.isAfter(LocalDateTime.parse(reservation.getEndTime()))) {
                        if (!unavailableBatteryList.contains(battery)) {
                            unavailableBatteryList.add(battery);
                        }
                    } else if (startT.isBefore(LocalDateTime.parse(reservation.getStartTime()))
                            && endT.isAfter(LocalDateTime.parse(reservation.getEndTime()))) {
                        if (!unavailableBatteryList.contains(battery)) {
                            unavailableBatteryList.add(battery);
                        }
                    } else if (startT.isAfter(LocalDateTime.parse(reservation.getStartTime()))
                            && endT.isBefore(LocalDateTime.parse(reservation.getEndTime()))) {
                        if (!unavailableBatteryList.contains(battery)) {
                            unavailableBatteryList.add(battery);
                        }
                    }
                }
            }

            List<Battery> list = availableBatteryList.stream().filter(battery -> !unavailableBatteryList.contains(battery)).collect(Collectors.toList());
            searchList.get(i).setCount(list.size());
            searchList.get(i).setBatteryList(list);
        }

        return searchList;
    }

}