package backend.domain.member.dto;

import backend.domain.member.entity.Member;
import backend.domain.payment.entity.Payment;
import backend.global.auditing.BaseTime;
import lombok.*;
import org.hibernate.validator.constraints.URL;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;
import java.util.List;


public class MemberDto {


    @Getter @Setter
    public static class Post {

        @NotBlank @Email
        private String email;

        @NotBlank @Pattern(regexp = "^(?=.[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$",
        message = "영어 소문자, 한글, 숫자로 2자 이상 16자 이하까지 작성해주세요.")
        private String nickname;

        @NotBlank @Pattern(regexp="(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\\W)(?=\\S+$).{8,20}",
                message = "비밀번호는 영문과 숫자, 특수기호를 적어도 1개 이상씩 포함하여 8자 ~ 20자여야 합니다.")
        private String password;

        @NotBlank
        private String phone;

        @NotBlank
        private String address;

        private String detailAddress;

        @URL
        private String photoURL;
    }


    @Getter @Setter
    public static class Patch {

        //정규식 필요
        @NotBlank @Pattern(regexp = "^(?=.[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$",
                message = "영어 소문자, 한글, 숫자로 2자 이상 16자 이하까지 작성해주세요.")
        private String nickname;

        @NotBlank
        private String phone;

        @NotBlank
        private String address;

        private String detailAddress;

        @URL
        private String photoURL;
    }


    @Getter @Setter
    public static class Response{

        private Long memberId;

        private String email;

        private String nickname;

        private String phone;

        private String address;

        private String detailAddress;

        private String photoUrl;

        private List<Payment> payment;

        private LocalDateTime createdAt;

        private LocalDateTime modifiedAt;

        public Response (Member member) {
            this.memberId = member.getId();
            this.email = member.getEmail();
            this.nickname = member.getNickname();
            this.phone = member.getPhone();
            this.address = member.getAddress();
            this.detailAddress = member.getDetailAddress();
            this.photoUrl = member.getPhotoURL();
            this.payment = member.getPayment();
            this.createdAt = member.getCreatedAt();
            this.modifiedAt = member.getModifiedAt();
        }
    }


    @Getter @Setter
    public static class PostResDto{
        private Long memberId;
        private String email;
        @NotBlank @Pattern(regexp = "^(?=.[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$",
                message = "영어 소문자, 한글, 숫자로 2자 이상 16자 이하까지 작성해주세요.")
        private String nickname;

        public PostResDto(Member member) {
            this.memberId = member.getId();
            this.email = member.getEmail();
            this.nickname = member.getNickname();
        }
    }

    @Getter @Setter
    public static class PatchResDto{
        private String email;
        private String nickname;
        private String phone;
        private String address;
        private String detailAddress;
        private String photoURL;


        public PatchResDto(Member member) {
            this.email = member.getEmail();
            this.nickname = member.getNickname();
            this.phone = member.getPhone();
            this.address = member.getAddress();
            this.detailAddress = member.getDetailAddress();
            this.photoURL = member.getPhotoURL();
        }
    }
}
