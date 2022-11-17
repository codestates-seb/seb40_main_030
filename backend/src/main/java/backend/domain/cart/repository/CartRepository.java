package backend.domain.cart.repository;

import backend.domain.cart.entity.Cart;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface CartRepository extends JpaRepository <Cart, Long>{

    Page<Cart> findAllByOrderByCreatedAtDesc(Pageable pageable);

    @Query(value = "select c from Cart c where c.member.id = :memberId")
    Optional<Cart> findByMemberId(Long memberId);
}
