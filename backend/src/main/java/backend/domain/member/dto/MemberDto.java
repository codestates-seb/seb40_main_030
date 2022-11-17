package backend.domain.member.dto;

import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;


public class MemberDto {
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Setter
    public static class Post{

        @NotBlank
        @Email
        private String email;


        @NotBlank
        @Pattern(regexp = "^[가-힣a-zA-Z]*$")
        private String nickname;

        @NotBlank
        private String password;

        @NotBlank
        private String phone;

        @NotBlank
        private Long carId;

        private String address;

        private String photoURL;
    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Setter
    public static class Patch{

        //정규식 필요
        @Pattern(regexp = "^[가-힣a-zA-Z]*$")
        private String nickname;

        private String carId;

        private String phone;

        private String address;

        private String photoURL;
    }

    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Setter
    public static class Response{

        private Long userId;

        private String email;

        private String nickname;

        private String photoUrl;

    }
}
