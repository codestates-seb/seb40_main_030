package backend.domain.station.repository;

import backend.domain.station.entity.Station;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface StationRepository extends JpaRepository<Station, Long> {

    @EntityGraph(attributePaths = {"battery"}, type = EntityGraph.EntityGraphType.LOAD)
    Page<Station> findAllByOrderByCreatedAtDesc(Pageable pageable);

    @EntityGraph(attributePaths = {"battery"}, type = EntityGraph.EntityGraphType.LOAD)
    @Query("select s from Station s where s.name like %:keyword%")
    Optional<Station> findByStationContains(@Param("keyword") String keyword);

    @EntityGraph(attributePaths = {"battery"}, type = EntityGraph.EntityGraphType.LOAD)
    @Query("select s from Station s where s.name like %:keyword% order by s.createdAt desc")
    List<Station> findWithAllByStationContainsByCreatedAtDesc(String keyword);

}