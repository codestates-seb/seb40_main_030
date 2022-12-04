package backend.domain.station.service;

import backend.domain.admin.entity.Admin;
import backend.domain.admin.repository.AdminRepository;
import backend.domain.battery.entity.Battery;
import backend.domain.battery.entity.Reservation;
import backend.domain.station.entity.Station;
import backend.domain.station.entity.StationSearch;
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
    private final AdminRepository adminRepository;
    @Value("${mail.address.admin.list}")
    private List<String> adminMailAddress;


    @Transactional
    public Station postStation(Station station, String adminEmail) {
        Admin admin = adminRepository.findByEmail(adminEmail)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NON_ACCESS_AUTH));
        station.setAdmin(admin);
        // 로그인한 계정이 ADMIN인지 검증하는 로직
        if(!adminMailAddress.contains(adminEmail)) throw new BusinessLogicException(ExceptionCode.NON_ACCESS_AUTH);

        // 로그인 한 Admin이 실제 그 station의 주인인지 검증
        verifyAdmin(station.getAdmin().getAdminId(),adminEmail);

        return stationRepository.save(station);
    }

    @Transactional
    public Station patchStation(Station station, String adminEmail) {

        // 로그인한 계정이 ADMIN인지 검증하는 로직
        if(!adminMailAddress.contains(adminEmail)) throw new BusinessLogicException(ExceptionCode.NON_ACCESS_AUTH);

        // 해당 스테이션 유무 조회
        Station savedStation = stationRepository.findById(station.getId())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.STATION_NOT_FOUND));

        // 로그인 한 Admin이 실제 그 station의 주인인지 검증
        verifyAdmin(savedStation.getAdmin().getAdminId(),adminEmail);

        Optional.ofNullable(station.getName()).ifPresent(savedStation::setName);
        Optional.ofNullable(station.getDetails()).ifPresent(savedStation::setDetails);
        Optional.ofNullable(station.getLatitude()).ifPresent(savedStation::setLatitude);
        Optional.ofNullable(station.getLongitude()).ifPresent(savedStation::setLongitude);
        Optional.ofNullable(station.getPhotoURL()).ifPresent(savedStation::setPhotoURL);
        Optional.ofNullable(station.getPhone()).ifPresent(savedStation::setPhone);
        Optional.ofNullable(station.getConfirmId()).ifPresent(savedStation::setConfirmId);

        return stationRepository.save(savedStation);
    }

    @Transactional
    public void deleteStation(Long stationId, String adminEmail) {
        // 로그인한 계정이 ADMIN인지 검증하는 로직
        if(!adminMailAddress.contains(adminEmail)) throw new BusinessLogicException(ExceptionCode.NON_ACCESS_AUTH);
        adminRepository.findByEmail(adminEmail)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NON_ACCESS_AUTH));
        Station existStation = stationRepository.findById(stationId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.STATION_NOT_FOUND));
        // 로그인 한 Admin이 실제 그 station의 주인인지 검증
        verifyAdmin(existStation.getAdmin().getAdminId(),adminEmail);


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

    public Station getStationBattery(Long stationId, String start, String end) {
        Station station = stationRepository.findById(stationId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.STATION_NOT_FOUND));

        DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm");
        LocalDateTime startTime = LocalDateTime.parse(start, format);
        LocalDateTime endTime = LocalDateTime.parse(end, format);

        // 입력 시간이 유효한 예약시간인지 검증. 종료시간이 시작시간 빠르거나, 시작 시간이 현재시간보다 빠를 때 엣지케이스
        if (endTime.isBefore(startTime) || startTime.isBefore(LocalDateTime.now())) {
//            throw new BusinessLogicException(ExceptionCode.NOT_VALID_TIME);
            station.setBattery(new ArrayList<>());
            return station;
        }

        List<Battery> list = station.getBattery();
        List<Battery> unavailableBatteryList = new ArrayList<>();
        for (int i = 0; i < station.getBattery().size(); i++) {
            for (int j = 0; j < station.getBattery().get(i).getReservations().size(); j++) {

                Battery candidate = station.getBattery().get(i);
                LocalDateTime reservedStart = LocalDateTime.parse(candidate.getReservations().get(j).getStartTime());
                LocalDateTime reservedEnd = LocalDateTime.parse(candidate.getReservations().get(j).getEndTime());

                if (startTime.isBefore(reservedStart) && endTime.isAfter(reservedStart)) {
                    if (!unavailableBatteryList.contains(candidate)) {
                        unavailableBatteryList.add(candidate);
                    }
                } else if (startTime.isBefore(reservedEnd) && endTime.isAfter(reservedEnd)) {
                    if (!unavailableBatteryList.contains(candidate)) {
                        unavailableBatteryList.add(candidate);
                    }
                } else if (startTime.isBefore(reservedStart) && endTime.isAfter(reservedEnd)) {
                    if (!unavailableBatteryList.contains(candidate)) {
                        unavailableBatteryList.add(candidate);
                    }
                } else if (startTime.isAfter(reservedStart) && endTime.isBefore(reservedEnd)) {
                    if (!unavailableBatteryList.contains(candidate)) {
                        unavailableBatteryList.add(candidate);
                    }
                }
            }
        }

        List<Battery> availableBatteryList = list.stream().filter(battery -> !unavailableBatteryList.contains(battery)).collect(Collectors.toList());

        station.setBattery(availableBatteryList);

        return station;
    }

    public List<StationSearch> getStationsSearch(StationSearch search) {
        // 기본 주소는 코드스테이츠
        StationSearch defaultStation = new StationSearch();
        // default 위치 설정
        defaultStation.setLatitude(37.49655445);
        defaultStation.setLongitude(127.02475418);
        defaultStation.setConfirmId(1615822138);  // 건물 Id
        // default 시간 설정 (30분 간격)
        String defaultStartTime = LocalDateTime.now().plusMinutes(10).format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"));
        String defaultEndTime = LocalDateTime.now().plusMinutes(40).format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"));
        defaultStation.setStartTime(defaultStartTime);
        defaultStation.setEndTime(defaultEndTime);

        // 만약 위경도 값 or confirmId or 시간변경값 들어오면 그 값으로 객체 필드값 변경
        Optional.ofNullable(search.getLatitude()).ifPresent(defaultStation::setLatitude);
        Optional.ofNullable(search.getLongitude()).ifPresent(defaultStation::setLongitude);
        Optional.ofNullable(search.getConfirmId()).ifPresent(defaultStation::setConfirmId);
        Optional.ofNullable(search.getStartTime()).ifPresent(defaultStation::setStartTime);
        Optional.ofNullable(search.getEndTime()).ifPresent(defaultStation::setEndTime);

        // 요청으로 받은 시간 또는 디플트 시간을 설정
        LocalDateTime startT = LocalDateTime.parse(defaultStation.getStartTime());
        LocalDateTime endT = LocalDateTime.parse(defaultStation.getEndTime());

        // 입력 시간이 유효한 예약시간인지 검증. 종료시간이 시작시간 빠르거나, 시작 시간이 현재시간보다 빠를 때 엣지케이스
        if (endT.isBefore(startT) || startT.isBefore(LocalDateTime.now())) throw new BusinessLogicException(ExceptionCode.NOT_VALID_TIME);

        // 객체 필드값을 중점으로 해서 반경검색 구현하기
        Double minLat = defaultStation.getLatitude() - 0.01171531;  // 위/아래 역 하나정도의 거리차이 = 0.00912237 == 0.01
        Double maxLat = defaultStation.getLatitude() + 0.01171531;
        Double minLog = defaultStation.getLongitude() - 0.01171531;  // 좌/우 역 하나정도의 거리차이 = 0.01171529 == 0.01
        Double maxLog = defaultStation.getLongitude() + 0.01171531;

        List<Station> originList = stationRepository.findAll();
        List<Station> filteredList = originList.stream()
                .filter(a -> a.getLatitude() >= minLat && a.getLatitude() <= maxLat)
                .filter(b -> b.getLongitude() >= minLog && b.getLongitude() <= maxLog)
                .collect(Collectors.toList());

        List<StationSearch> searchList = StationTimeFilter(defaultStation, startT, endT, filteredList);

        return searchList;
    }


    public List<StationSearch> getStationsSearchAll(StationSearch search) {
        // 기본 주소는 코드스테이츠
        StationSearch defaultStation = new StationSearch();
        // default 위치 설정
        defaultStation.setLatitude(37.49655445);
        defaultStation.setLongitude(127.02475418);
        defaultStation.setConfirmId(1615822138);  // 건물 Id
        // default 시간 설정 (30분 간격)
        String defaultStartTime = LocalDateTime.now().plusMinutes(10).format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"));
        String defaultEndTime = LocalDateTime.now().plusMinutes(40).format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"));
        defaultStation.setStartTime(defaultStartTime);
        defaultStation.setEndTime(defaultEndTime);

        // 만약 위경도 값 or confirmId or 시간변경값 들어오면 그 값으로 객체 필드값 변경
        Optional.ofNullable(search.getStartTime()).ifPresent(defaultStation::setStartTime);
        Optional.ofNullable(search.getEndTime()).ifPresent(defaultStation::setEndTime);

        // 요청으로 받은 시간 또는 디플트 시간을 설정
        LocalDateTime startT = LocalDateTime.parse(defaultStation.getStartTime());
        LocalDateTime endT = LocalDateTime.parse(defaultStation.getEndTime());

        // 입력 시간이 유효한 예약시간인지 검증. 종료시간이 시작시간 빠르거나, 시작 시간이 현재시간보다 빠를 때 엣지케이스
        if (endT.isBefore(startT) || startT.isBefore(LocalDateTime.now())) throw new BusinessLogicException(ExceptionCode.NOT_VALID_TIME);

        List<Station> originList = stationRepository.findAll();

        List<StationSearch> searchList = StationTimeFilter(defaultStation, startT, endT, originList);

        return searchList;
    }

    private static List<StationSearch> StationTimeFilter(StationSearch defaultStation, LocalDateTime startT, LocalDateTime endT, List<Station> filteredList) {
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
        for (int i = 0; i < searchList.size(); i++) {
            List<Battery> availableBatteryList = searchList.get(i).getBatteryList();
            List<Battery> unavailableBatteryList = new ArrayList<>();

            for (int j = 0; j < searchList.get(i).getBatteryList().size(); j++) {
                Battery battery = searchList.get(i).getBatteryList().get(j);

                for (int k = 0; k < searchList.get(i).getBatteryList().get(j).getReservations().size(); k++) {
                    Reservation reservation = searchList.get(i).getBatteryList().get(j).getReservations().get(k);
                    LocalDateTime reserveStart = LocalDateTime.parse(reservation.getStartTime());
                    LocalDateTime reserveEnd = LocalDateTime.parse(reservation.getStartTime());

                    if (startT.isBefore(reserveStart) && endT.isAfter(reserveStart)) {
                        if (!unavailableBatteryList.contains(battery)) {
                            unavailableBatteryList.add(battery);
                        }
                    } else if (startT.isAfter(reserveStart) && startT.isBefore(reserveEnd) && endT.isAfter(reserveEnd)) {
                        if (!unavailableBatteryList.contains(battery)) {
                            unavailableBatteryList.add(battery);
                        }
                    } else if (startT.isBefore(reserveStart) && endT.isAfter(reserveEnd)) {
                        if (!unavailableBatteryList.contains(battery)) {
                            unavailableBatteryList.add(battery);
                        }
                    } else if (startT.isAfter(reserveStart) && endT.isBefore(reserveEnd)) {
                        if (!unavailableBatteryList.contains(battery)) {
                            unavailableBatteryList.add(battery);
                        }
                    } else if (startT.isEqual(reserveStart) || startT.isEqual(reserveEnd) || endT.isEqual(reserveStart) || endT.isEqual(reserveEnd)) {
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


    // 키워드에 해당하는 단일 대여소 응답
    public Station getKeywordStation (String keyword) {
        Station station = stationRepository.findByStationContains(keyword)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.STATION_NOT_FOUND));

        return station;
    }


    // 키워드에 해당하는 모든 대여소 리스트 응답
    public List<Station> getKeywordStations(String keyword) {
        List<Station> list = stationRepository.findWithAllByStationContainsByCreatedAtDesc(keyword);

        return list;
    }

    private void verifyAdmin (Long savedAdminId, String adminEmail) {
        Admin admin = adminRepository.findByEmail(adminEmail)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ADMIN_NOT_FOUND));
        if(savedAdminId!=admin.getAdminId()){
            throw new BusinessLogicException(ExceptionCode.NON_ACCESS_MODIFY);
        }
    }

}