package backend.domain.zone.service;

import backend.domain.zone.entity.Zone;
import backend.domain.zone.repository.ZoneRepository;
import backend.global.exception.dto.BusinessLogicException;
import backend.global.exception.exceptionCode.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service @RequiredArgsConstructor @Transactional(readOnly = true)
public class ZoneService {

    private final ZoneRepository zoneRepository;

    @Transactional
    public Zone postZone (Zone zone) {

        return zoneRepository.save(zone);
    }

    @Transactional
    public Zone patchZone (Zone zone) {
        Zone savedZone = zoneRepository.findById(zone.getId())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND));

        Optional.ofNullable(zone.getName()).ifPresent(savedZone::setName);
        Optional.ofNullable(zone.getDetails()).ifPresent(savedZone::setDetails);
        Optional.of(zone.getLatitude()).ifPresent(savedZone::setLatitude);
        Optional.of(zone.getLongitude()).ifPresent(savedZone::setLongitude);
        Optional.ofNullable(zone.getPhotoURL()).ifPresent(savedZone::setPhotoURL);

        return zoneRepository.save(savedZone);
    }

    @Transactional
    public void deleteZone (Long zoneId) {
        Zone existZone = zoneRepository.findById(zoneId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND));
        zoneRepository.delete(existZone);
    }


    public Zone getZone (Long zoneId) {
        return zoneRepository.findById(zoneId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND));

    }


    public Page<Zone> getZones (Pageable pageable) {

        return zoneRepository.findAllByOrderByCreatedAtDesc(pageable);
    }

}
