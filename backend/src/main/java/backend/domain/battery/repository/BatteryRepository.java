package backend.domain.battery.repository;

import backend.domain.battery.entity.Battery;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BatteryRepository extends JpaRepository<Battery,Long> {
}
