package backend.domain.station.controller;

import backend.domain.station.dto.*;
import backend.domain.station.entity.Station;
import backend.domain.station.entity.StationSearch;
import backend.domain.station.service.StationService;
import backend.global.dto.PageInfoDto;
import backend.global.dto.SingleResDto;
import backend.global.security.utils.JwtExtractUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping("/stations")
public class StationController {

    private final StationService stationService;
    private final JwtExtractUtils jwtExtractUtils;

    @PostMapping
    public ResponseEntity<StationResDto> postStation(HttpServletRequest request,
                                                     @RequestBody StationPostReqDto stationPostReqDto) {
        String adminEmail = jwtExtractUtils.extractEmailFromJwt(request);
        Station savedStation = stationService.postStation(stationPostReqDto.toStation(), adminEmail);
        StationResDto stationResDto = new StationResDto(savedStation);

        return new ResponseEntity<>(stationResDto, HttpStatus.CREATED);
    }


    @PatchMapping("/{stationId}")
    public ResponseEntity<StationResDto> patchStation(HttpServletRequest request,
                                                      @PathVariable Long stationId,
                                                      @RequestBody StationPatchReqDto stationPatchReqDto) {
        Station station = stationPatchReqDto.toStation(stationId);
        String adminEmail = jwtExtractUtils.extractEmailFromJwt(request);
        Station modifiedStation = stationService.patchStation(station, adminEmail);

        return new ResponseEntity<>(new StationResDto(modifiedStation), HttpStatus.OK);
    }


    @DeleteMapping("/{stationId}")
    public ResponseEntity<SingleResDto<String>> deleteStation(HttpServletRequest request,
                                                              @PathVariable Long stationId) {
        String adminEmail = jwtExtractUtils.extractEmailFromJwt(request);
        stationService.deleteStation(stationId, adminEmail);

        return new ResponseEntity<>(new SingleResDto<>("Success Delete"), HttpStatus.OK);
    }


    @GetMapping("/{stationId}")
    public ResponseEntity<StationResDto> getStation(@PathVariable Long stationId) {
        Station station = stationService.getStation(stationId);
        StationResDto stationResDto = new StationResDto(station);

        return new ResponseEntity<>(stationResDto, HttpStatus.OK);
    }


    @GetMapping
    public ResponseEntity<PageInfoDto> getStations(Pageable pageable) {
        Page<Station> page = stationService.getStations(pageable);
        Page<StationResDto> dtoPage = page.map(StationResDto::new);

        return new ResponseEntity<>(new PageInfoDto(dtoPage), HttpStatus.OK);
    }


    @GetMapping("/batteries/{stationId}")  // 한개의 스테이션의 가용 배터리 리스트 조회
    public ResponseEntity<StationBatteryResDto> getStationBattery(@PathVariable Long stationId,
                                                                  @RequestParam(required = false) String startTime,
                                                                  @RequestParam(required = false) String endTime) {
        Station station = stationService.getStationBattery(stationId, startTime, endTime);
        StationBatteryResDto response = new StationBatteryResDto(station, startTime, endTime);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }


    @GetMapping("/search")
    public ResponseEntity<PageInfoDto> getStationsSearch(Pageable pageable,
                                                         @RequestParam(required = false) Integer confirmId,
                                                         @RequestParam(required = false) Double latitude,
                                                         @RequestParam(required = false) Double longitude,
                                                         @RequestParam(required = false) String startTime,
                                                         @RequestParam(required = false) String endTime) {
        StationSearch stationSearch = new StationSearch(confirmId, latitude, longitude, startTime, endTime);
        List<StationSearch> list = stationService.getStationsSearch(stationSearch);
        Page<StationSearch> page = new PageImpl<>(list, pageable, list.size());
        Page<StationSearchResDto> dtoPage = page.map(StationSearchResDto::new);

        return new ResponseEntity<>(new PageInfoDto<>(dtoPage), HttpStatus.OK);
    }


    @GetMapping("/searchAll")
    public ResponseEntity<PageInfoDto> getStationsSearchAll(Pageable pageable,
                                                         @RequestParam(required = false) String startTime,
                                                         @RequestParam(required = false) String endTime) {
        StationSearch stationSearch = new StationSearch(startTime, endTime);
        List<StationSearch> list = stationService.getStationsSearchAll(stationSearch);
        Page<StationSearch> page = new PageImpl<>(list, pageable, list.size());
        Page<StationSearchResDto> dtoPage = page.map(StationSearchResDto::new);

        return new ResponseEntity<>(new PageInfoDto<>(dtoPage), HttpStatus.OK);
    }


    @GetMapping("/keyword")
    public ResponseEntity<StationResDto> getKeywordStation(@RequestParam(required = false) String keyword) {
        Station station = stationService.getKeywordStation(keyword);
        StationResDto response = new StationResDto(station);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/locationlist")
    public ResponseEntity<List<StationResDto>> getKeywordStations(@RequestParam(required = false) String keyword) {
        List<Station> list = stationService.getKeywordStations(keyword);
        List<StationResDto> response = list.stream().map(StationResDto::new).collect(Collectors.toList());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}