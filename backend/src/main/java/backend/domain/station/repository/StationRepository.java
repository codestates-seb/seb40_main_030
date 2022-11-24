package backend.domain.station.repository;

import backend.domain.station.entity.Station;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StationRepository extends JpaRepository<Station, Long> {

    @EntityGraph(attributePaths = {"battery"}, type = EntityGraph.EntityGraphType.LOAD)
    Page<Station> findAllByOrderByCreatedAtDesc(Pageable pageable);
}