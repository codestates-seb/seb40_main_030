package backend.domain.member.dto;

import backend.domain.member.entity.Member;
import backend.global.auditing.BaseTime;
import lombok.*;
import org.hibernate.validator.constraints.URL;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;


public class MemberDto {

    @NoArgsConstructor @AllArgsConstructor
    @Getter @Setter
    public static class Post {

        @NotBlank @Email
        private String email;

        @NotBlank @Pattern(regexp = "^[가-힣a-zA-Z]*$")
        private String nickname;

        @NotBlank
        private String password;

        @NotBlank
        private String phone;

        @NotBlank
        private String address;

        @URL
        private String photoURL;
    }

    @NoArgsConstructor @AllArgsConstructor
    @Getter @Setter
    public static class Patch {

        //정규식 필요
        @NotBlank @Pattern(regexp = "^[가-힣a-zA-Z]*$")
        private String nickname;

        @NotBlank
        private String phone;

        @NotBlank
        private String address;

        @URL
        private String photoURL;
    }

    @NoArgsConstructor @AllArgsConstructor
    @Getter @Setter
    public static class Response{

        private Long memberId;

        private String email;

        private String nickname;

        private String phone;

        private String address;

        private String photoUrl;

        private LocalDateTime createdAt;

        private LocalDateTime modifiedAt;

        public Response (Member member) {
            this.memberId = member.getMemberId();
            this.email = member.getEmail();
            this.nickname = member.getNickname();
            this.phone = member.getPhone();
            this.address = member.getAddress();
            this.photoUrl = member.getPhotoURL();
            this.createdAt = member.getCreatedAt();
            this.modifiedAt = member.getModifiedAt();
        }

    }
}
