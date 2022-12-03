package backend.domain.admin.mapper.repository;

import backend.domain.admin.entity.Admin;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin,Long> {
    Page<Admin> findAllByOrderByCreatedAtDesc(Pageable pageable);
    Optional<Admin> findByEmail(String email);
}
