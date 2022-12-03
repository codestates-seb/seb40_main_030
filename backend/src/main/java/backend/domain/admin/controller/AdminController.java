package backend.domain.admin.controller;

import backend.domain.admin.dto.AdminDto;
import backend.domain.admin.entity.Admin;
import backend.domain.admin.mapper.AdminMapper;
import backend.domain.admin.service.AdminService;
import backend.global.dto.PageInfoDto;
import backend.global.dto.SingleResDto;
import backend.global.security.utils.JwtExtractUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/admins")
@Validated
@Slf4j
public class AdminController {
    private final AdminService adminService;
    private final AdminMapper mapper;
    private final JwtExtractUtils jwtExtractUtils;

    public AdminController(AdminService adminService, AdminMapper mapper, JwtExtractUtils jwtExtractUtils) {
        this.adminService = adminService;
        this.mapper = mapper;
        this.jwtExtractUtils = jwtExtractUtils;
    }

    // 관리자 정보 등록
    @PostMapping
    public ResponseEntity postAdmin(@RequestBody AdminDto.Post requestBody){
        Admin admin = mapper.adminPostDtoToAdmin(requestBody);
        Admin createAdmin = adminService.createAdmin(admin);
//        AdminDto.Response response = mapper.adminToAdminResponse(createAdmin);
        AdminDto.Response response = new AdminDto.Response(createAdmin);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    // 해당 ID 관리자 수정
    @PatchMapping("/edit")
    public ResponseEntity patchAdmin(HttpServletRequest request,
                                     @RequestBody AdminDto.Patch requestBody){
        Admin admin = mapper.adminPatchDtoToAdmin(requestBody);
        String adminEmail = jwtExtractUtils.extractEmailFromJwt(request);
        admin.setEmail(adminEmail);
        Admin updateAdmin = adminService.updateAdmin(admin);
        AdminDto.Response response = mapper.adminToAdminResponse(updateAdmin);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    //해당 ID 관리자 조회
    @GetMapping("/find")
    public ResponseEntity getAdmin(HttpServletRequest request){
        String adminEmail = jwtExtractUtils.extractEmailFromJwt(request);
        Admin admin = adminService.findAdmin(adminEmail);
        AdminDto.Response response = new AdminDto.Response(admin);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 관리자 전체 조회
    @GetMapping
    public ResponseEntity<PageInfoDto> getAdmins (Pageable pageable){
        Page<Admin> page = adminService.findAdmins(pageable);
        Page<AdminDto.Response> dtoPage = page.map(AdminDto.Response::new);

        return new ResponseEntity<>(new PageInfoDto<>(dtoPage), HttpStatus.OK);
    }

    // 해당 ID 관리자 삭제
    @DeleteMapping("/remove")
    public ResponseEntity<SingleResDto<String>> deleteAdmin(HttpServletRequest request){
        String adminEmail = jwtExtractUtils.extractEmailFromJwt(request);
        adminService.deleteAdmin(adminEmail);

        return new ResponseEntity<>(new SingleResDto<>("Success Delete"), HttpStatus.OK);
    }
}
