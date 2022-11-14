package backend.domain.order.repository;

import backend.domain.order.entity.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository <Order, Long>{

    Page<Order> findAllByOrderByCreatedAtDesc(Pageable pageable);
}
