package backend.domain.admin.service;

import backend.domain.admin.entity.Admin;
import backend.domain.admin.repository.AdminRepository;
import backend.global.exception.dto.BusinessLoginException;
import backend.global.exception.exceptionCode.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class AdminService {
    private final AdminRepository adminRepository;
    public AdminService(AdminRepository adminRepository){
        this.adminRepository = adminRepository;
    }

    // 관리자회원 생성
    public Admin createAdmin(Admin admin){
        verifyExistsEmail(admin.getEmail());

        return adminRepository.save(admin);
    }

    // 관리자회원 수정
    public Admin updateAdmin(Admin admin){
        Admin findAdmin = findVerifiedAdmin(admin.getAdminId());
        findAdmin.setPhone(admin.getPhone());
        findAdmin.setModifiedAt(LocalDateTime.now());

        return adminRepository.save(findAdmin);
    }

    // 해당 ID 관리자 조회
    public Admin findAdmin(long adminId){
        Admin findAdmin = findVerifiedAdmin(adminId);
        findAdmin.setCreatedAt(findAdmin.getCreatedAt());

        return findAdmin;
    }

    // 관리자 전체 조회
    public Page<Admin> findAdmins(Pageable pageable){
        return adminRepository.findAllByOrderByCreatedAtDesc(pageable);
    }

    // 해당 ID 관리자 삭제
    public void deleteAdmin(long adminId){
        Admin findAdmin = findVerifiedAdmin(adminId);
        adminRepository.delete(findAdmin);
    }

    // 해당 ID의 관리자가 존재하는지 검증
    private Admin findVerifiedAdmin(long adminId){
        Optional<Admin> optionalAdmin = adminRepository.findById(adminId);
        Admin findAdmin = optionalAdmin.orElseThrow(() ->
                new BusinessLoginException(ExceptionCode.ADMIN_NOT_FOUND));
        return findAdmin;
    }

    // 해당 email이 존재하는지 검증
    private void verifyExistsEmail(String email){
        Optional<Admin> admin = adminRepository.findByEmail(email);

        if(admin.isPresent()){
            throw new BusinessLoginException(ExceptionCode.ADMIN_EXIST);

        }
    }
}
