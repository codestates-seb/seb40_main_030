package backend.domain.zone.controller;

import backend.domain.zone.dto.ZonePatchReqDto;
import backend.domain.zone.dto.ZonePostReqDto;
import backend.domain.zone.dto.ZoneResDto;
import backend.domain.zone.entity.Zone;
import backend.domain.zone.service.ZoneService;
import backend.global.dto.PageInfoDto;
import backend.global.dto.SingleResDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RequiredArgsConstructor
@RestController @RequestMapping("/zones")
public class ZoneController {

    private final ZoneService zoneService;

    @PostMapping
    public ResponseEntity<ZoneResDto> postZone (@RequestBody ZonePostReqDto zonePostReqDto ) {
        Zone savedZone = zoneService.postZone(zonePostReqDto.toZone());
        ZoneResDto zoneResDto = new ZoneResDto(savedZone);

        return new ResponseEntity<>(zoneResDto, HttpStatus.CREATED);
    }


    @PatchMapping("/{zoneId}")
    public ResponseEntity<ZoneResDto> patchZone (@PathVariable Long zoneId,
                                                           @RequestBody ZonePatchReqDto zonePatchReqDto) {
        Zone zone = zonePatchReqDto.toZone(zoneId);
        Zone modifiedZone = zoneService.patchZone(zone);

        return new ResponseEntity<>(new ZoneResDto(modifiedZone), HttpStatus.OK);
    }


    @DeleteMapping("/{zoneId}")
    public ResponseEntity<SingleResDto<String>> deleteZone (@PathVariable Long zoneId) {
        zoneService.deleteZone(zoneId);

        return new ResponseEntity<>(new SingleResDto<>("success delete"), HttpStatus.OK);
    }


    @GetMapping("/{zoneId}")
    public ResponseEntity<ZoneResDto> getZone (@PathVariable Long zoneId) {
        Zone zone = zoneService.getZone(zoneId);
        ZoneResDto zoneResDto = new ZoneResDto(zone);
        return new ResponseEntity<>(zoneResDto, HttpStatus.OK);
    }


    @GetMapping
    public ResponseEntity<PageInfoDto> getZones (Pageable pageable) {
        Page<Zone> page = zoneService.getZones(pageable);

        return new ResponseEntity<>(new PageInfoDto(page), HttpStatus.OK);
    }
}
