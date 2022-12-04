package backend.domain.battery.repository;

import backend.domain.battery.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    @Query(value = "select p from Reservation p where p.battery.batteryId =:batteryId")
    List<Reservation> findWithAllByBatteryId(@Param("batteryId") Long batteryId);
}
