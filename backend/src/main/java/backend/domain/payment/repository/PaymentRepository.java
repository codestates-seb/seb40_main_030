package backend.domain.payment.repository;

import backend.domain.payment.entity.Payment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface PaymentRepository extends JpaRepository<Payment, Long> {

    @EntityGraph(attributePaths = {"battery", "member", "station"})
    Page<Payment> findAllByOrderByCreatedAtDesc(Pageable pageable);

    @Query(value = "select p from Payment p where p.battery.batteryId =:batteryId")
//    @EntityGraph(attributePaths = {"battery"})
    List<Payment> findWithAllByBatteryId(@Param("batteryId") Long batteryId);

}
