package backend.domain.admin.dto;

import backend.domain.admin.entity.Admin;
import backend.domain.station.entity.Station;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class AdminDto {
    @Getter
    @Setter
    public static class Post{
        @Email
        @NotBlank(message = "이메일은 입력해주세요.")
        private String email;

        @NotBlank(message = "비밀번호를 입력해주세요.")
        @Pattern(regexp="(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\\W)(?=\\S+$).{8,20}",
                message = "비밀번호는 영문과 숫자, 특수기호를 적어도 1개 이상씩 포함하여 8자 ~ 20자여야 합니다.")
        private String password;

        @NotBlank(message = "휴대전화를 입력해주세요.")
        @Pattern(regexp = "^\\d{3}-\\d{3,4}-\\d{4}$",
                message = "휴대전화번호 형식으로 입력해주세요.")
        private String phone;
    }

    @Getter
    @Setter
    public static class Patch{
        private long adminId;

        @NotBlank(message = "휴대전화를 입력해주세요.")
        @Pattern(regexp = "^\\d{3}-\\d{3,4}-\\d{4}$",
                message = "휴대전화번호 형식으로 입력해주세요.")
        private String phone;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response{
        private long adminId;
        private String email;
        private String password;
        private String phone;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private List<Station> stationList;

        public Response(Admin admin){
            this.adminId = admin.getAdminId();
            this.email = admin.getEmail();
            this.password = admin.getPassword();
            this.phone = admin.getPhone();
            this.createdAt = admin.getCreatedAt();
            this.modifiedAt = admin.getModifiedAt();

            List<Station> list = new ArrayList<>();
            for(int i = 0; i < admin.getStationList().size(); i++){
                Station adminStation = new Station();
                adminStation.setId(admin.getStationList().get(i).getId());
                adminStation.setName(admin.getStationList().get(i).getName());
                adminStation.setDetails(admin.getStationList().get(i).getDetails());
                adminStation.setLatitude(admin.getStationList().get(i).getLatitude());
                adminStation.setLongitude(admin.getStationList().get(i).getLongitude());
                adminStation.setPhotoURL(admin.getStationList().get(i).getPhotoURL());
                //배터리 추가해야함
                adminStation.setBattery(admin.getStationList().get(i).getBattery());
                adminStation.setCreatedAt(admin.getStationList().get(i).getCreatedAt());
                adminStation.setModifiedAt(admin.getStationList().get(i).getModifiedAt());
                adminStation.setPhone(admin.getStationList().get(i).getPhone());
                adminStation.setConfirmId(admin.getStationList().get(i).getConfirmId());
                list.add(adminStation);
            }
            this.stationList = list;
        }
    }
}
