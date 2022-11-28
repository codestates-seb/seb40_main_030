package backend.domain.station.controller;

import backend.domain.station.dto.*;
import backend.domain.station.entity.Station;
import backend.domain.station.entity.StationSearch;
import backend.domain.station.service.StationService;
import backend.global.dto.PageInfoDto;
import backend.global.dto.SingleResDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequiredArgsConstructor
@RestController @RequestMapping("/stations")
public class StationController {

    private final StationService stationService;

    @PostMapping
    public ResponseEntity<StationResDto> postStation (@RequestBody StationPostReqDto stationPostReqDto ) {
        Station savedStation = stationService.postStation(stationPostReqDto.toStation());
        StationResDto stationResDto = new StationResDto(savedStation);

        return new ResponseEntity<>(stationResDto, HttpStatus.CREATED);
    }


    @PatchMapping("/{stationId}")
    public ResponseEntity<StationResDto> patchStation (@PathVariable Long stationId,
                                                       @RequestBody StationPatchReqDto stationPatchReqDto) {
        Station station = stationPatchReqDto.toStation(stationId);
        Station modifiedStation = stationService.patchStation(station);

        return new ResponseEntity<>(new StationResDto(modifiedStation), HttpStatus.OK);
    }


    @DeleteMapping("/{stationId}")
    public ResponseEntity<SingleResDto<String>> deleteStation (@PathVariable Long stationId) {
        stationService.deleteStation(stationId);

        return new ResponseEntity<>(new SingleResDto<>("Success Delete"), HttpStatus.OK);
    }


    @GetMapping("/{stationId}")
    public ResponseEntity<StationResDto> getStation (@PathVariable Long stationId) {
        Station station = stationService.getStation(stationId);
        StationResDto stationResDto = new StationResDto(station);

        return new ResponseEntity<>(stationResDto, HttpStatus.OK);
    }


    @GetMapping
    public ResponseEntity<PageInfoDto> getStations (Pageable pageable) {
        Page<Station> page = stationService.getStations(pageable);
        Page<StationResDto> dtoPage = page.map(StationResDto::new);

        return new ResponseEntity<>(new PageInfoDto(dtoPage), HttpStatus.OK);
    }


    @GetMapping("/batteries/{stationId}")
    public ResponseEntity<StationResDto> getStationBattery (@PathVariable Long stationId,
                                                            @RequestBody StationBatteryReqDto stationBatteryReqDto) {
        Station station = stationService.getStationBattery(stationId, stationBatteryReqDto);
        StationResDto response = new StationResDto(station);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }


    @GetMapping("/search")
    public ResponseEntity<PageInfoDto> getStationsSearch (Pageable pageable,
                                                          @RequestBody StationSearchReqDto stationSearchReqDto) {
        List<StationSearch> list = stationService.getStationsSearch(stationSearchReqDto.toStationSearch());
        Page<StationSearch> page = new PageImpl<>(list, pageable,list.size());
        Page<StationSearchResDto> dtoPage = page.map(StationSearchResDto::new);

        return new ResponseEntity<>(new PageInfoDto<>(dtoPage), HttpStatus.OK);
    }

}