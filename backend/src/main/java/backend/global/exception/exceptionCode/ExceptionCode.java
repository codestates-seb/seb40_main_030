package backend.global.exception.exceptionCode;

import lombok.Getter;

public enum ExceptionCode {

    NON_ACCESS_MODIFY(401, "수정권한이 없습니다."),
    NON_ACCESS_AUTH(401, "권한이 없습니다"),

    ACCESS_TOKEN_EXPIRATION(401, "재 로그인이 필요합니다."),
    LOGIN_FAILURE(401, "아이디 혹은 비밀번호가 옳지 않습니다."),

    ADMIN_EXIST(401, "중복된 관리자 계정입니다."),
    EMAIL_EXIST(401, "중복된 이메일입니다."),
    NICKNAME_EXIST(401, "중복된 닉네임입니다."),

    NOT_FOUND(404, "요청하신 데이터를 찾을 수 없습니다."),
    MEMBER_NOT_FOUND(404, "해당 계정이 존재하지 않습니다."),
    BATTERY_NOT_FOUND(404, "해당 배터리가 존재하지 않습니다."),
    ADMIN_NOT_FOUND(404, "해당 관리자가 존재하지 않습니다."),
    STATION_NOT_FOUND(404, "해당 대여소가 존재하지 않습니다."),
    PAY_NOT_FOUND(404, "해당 결제가 존재하지 않습니다."),
    AUTHENTICATION_FAIL(400, "인증을 실패했습니다."),
    CAN_NOT_RESERVE(400, "해당 시간은 예약이 불가능합니다."),
    NOT_VALID_ADMIN_CODE(400, "유효한 관리자 코드가 아닙니다."),
    NOT_VALID_TIME(404, "시간을 다시 설정해 주세요."),
    LOGIN_REQUIRED(401, "로그인이 필요한 서비스 입니다.");


    @Getter
    private int status;
    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }

}
