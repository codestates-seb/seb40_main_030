package backend.domain.admin.service;

import backend.domain.admin.entity.Admin;
import backend.domain.admin.mapper.repository.AdminRepository;
import backend.global.exception.dto.BusinessLogicException;
import backend.global.exception.exceptionCode.ExceptionCode;
import backend.global.security.utils.CustomAuthorityUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service @Transactional(readOnly = true)
public class AdminService {
    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils customAuthorityUtils;
    @Value("${mail.address.admin.list}")
    private List<String> adminMailAddress;

    public AdminService(AdminRepository adminRepository, PasswordEncoder passwordEncoder, CustomAuthorityUtils customAuthorityUtils){
        this.adminRepository = adminRepository;
        this.passwordEncoder = passwordEncoder;
        this.customAuthorityUtils = customAuthorityUtils;
    }


    // 관리자회원 생성
    @Transactional
    public Admin createAdmin(Admin admin){


        // 서버에서 관리하는 대여소 관리자(admin)용 이메일이 아닌 값이 들어오면 튕겨냄
        if (!adminMailAddress.contains(admin.getEmail())) throw new BusinessLogicException(ExceptionCode.NON_ACCESS_AUTH);

        adminRepository.findByEmail(admin.getEmail())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ADMIN_EXIST));

        String encryptedPassword = passwordEncoder.encode(admin.getPassword());
        admin.setPassword(encryptedPassword);

        List<String> roles = customAuthorityUtils.createRoles(admin.getEmail());
        admin.setRoles(roles);

        return adminRepository.save(admin);
    }

    // 관리자회원 수정
    @Transactional
    public Admin updateAdmin(Admin admin) {
        Admin findAdmin = adminRepository.findByEmail(admin.getEmail())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NON_ACCESS_MODIFY));
        findAdmin.setPhone(admin.getPhone());
        findAdmin.setModifiedAt(LocalDateTime.now());

        return adminRepository.save(findAdmin);
    }

    // 해당 ID 관리자 조회
    public Admin findAdmin(String adminEmail){
        Admin findAdmin = adminRepository.findByEmail(adminEmail)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NON_ACCESS_AUTH));
        findAdmin.setCreatedAt(findAdmin.getCreatedAt());

        return findAdmin;
    }

    // 관리자 전체 조회
    public Page<Admin> findAdmins(Pageable pageable){

        return adminRepository.findAllByOrderByCreatedAtDesc(pageable);
    }

    // 해당 ID 관리자 삭제
    @Transactional
    public void deleteAdmin(String adminEmail){
        Admin findAdmin = adminRepository.findByEmail(adminEmail)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NON_ACCESS_MODIFY));

        // 연관관계 매핑때문?
        adminRepository.delete(findAdmin);
    }

    // 해당 ID의 관리자가 존재하는지 검증
    private Admin findVerifiedAdmin(long adminId){
        Optional<Admin> optionalAdmin = adminRepository.findById(adminId);
        Admin findAdmin = optionalAdmin.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ADMIN_NOT_FOUND));
        return findAdmin;
    }

    // 해당 email이 존재하는지 검증합니다.
    private void verifyExistsEmail(String email){
        Optional<Admin> admin = adminRepository.findByEmail(email);

        if(admin.isPresent()){
            throw new BusinessLogicException(ExceptionCode.ADMIN_EXIST);

        }
    }
}
