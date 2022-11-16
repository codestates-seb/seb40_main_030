package backend.domain.admin.mapper;

import backend.domain.admin.dto.AdminDto;
import backend.domain.admin.entity.Admin;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AdminMapper {
    Admin adminPostDtoToAdmin(AdminDto.Post requestBody);
    Admin adminPatchDtoToAdmin(AdminDto.Patch requestBody);
    AdminDto.Response adminToAdminResponse(Admin admin);
    List<AdminDto.Response> adminToAdminResponse(List<Admin> admins);
}
