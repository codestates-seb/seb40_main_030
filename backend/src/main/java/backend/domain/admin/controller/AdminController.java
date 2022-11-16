package backend.domain.admin.controller;

import backend.domain.admin.dto.AdminDto;
import backend.domain.admin.entity.Admin;
import backend.domain.admin.mapper.AdminMapper;
import backend.domain.admin.service.AdminService;
import backend.global.dto.PageInfoDto;
import backend.global.dto.SingleResDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/admins")
@Validated
@Slf4j
public class AdminController {
    private final AdminService adminService;
    private final AdminMapper mapper;

    public AdminController(AdminService adminService, AdminMapper mapper){
        this.adminService = adminService;
        this.mapper = mapper;
    }

    // 관리자 정보 등록
    @PostMapping
    public ResponseEntity postAdmin(@Valid @RequestBody AdminDto.Post requestBody){
        Admin admin = mapper.adminPostDtoToAdmin(requestBody);
        Admin createAdmin = adminService.createAdmin(admin);
        AdminDto.Response response = mapper.adminToAdminResponse(createAdmin);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    // 해당 ID 관리자 수정
    @PatchMapping("/{adminId}")
    public ResponseEntity patchAdmin(@PathVariable("adminId") @Positive long adminId,
                                     @Valid @RequestBody AdminDto.Patch requestBody){
        requestBody.setAdminId(adminId);
        Admin admin = mapper.adminPatchDtoToAdmin(requestBody);
        Admin updateAdmin = adminService.updateAdmin(admin);
        AdminDto.Response response = mapper.adminToAdminResponse(updateAdmin);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    //해당 ID 관리자 조회
    @GetMapping("/{adminId}")
    public ResponseEntity getAdmin(@PathVariable("adminId") @Positive long adminId){
        Admin admin = adminService.findAdmin(adminId);
        AdminDto.Response response = mapper.adminToAdminResponse(admin);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 관리자 전체 조회
    @GetMapping
    public ResponseEntity<PageInfoDto> getAdmins (Pageable pageable){
        Page<Admin> page = adminService.findAdmins(pageable);

        return new ResponseEntity<>(new PageInfoDto<>(page), HttpStatus.OK);
    }

    // 해당 ID 관리자 삭제
    @DeleteMapping("/{adminId}")
    public ResponseEntity<SingleResDto<String>> deleteAdmin(@PathVariable("adminId") @Positive long adminId){
        adminService.deleteAdmin(adminId);
        return new ResponseEntity<>(new SingleResDto<>("Success Delete"), HttpStatus.OK);
    }
}
