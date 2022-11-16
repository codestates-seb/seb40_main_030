package backend.domain.zone.repository;

import backend.domain.zone.entity.Zone;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ZoneRepository extends JpaRepository <Zone, Long> {

    Page<Zone> findAllByOrderByCreatedAtDesc(Pageable pageable);
}
