package backend.global.exception.exceptionCode;

import lombok.Getter;

public enum ExceptionCode {
    // 비즈니스 모델에서 필요시 에러코드 추가하는 부분

    NO_CONTENT(204, "데이터가 존재하지 않습니다."),
    NOT_FOUND(404, "요청하신 데이터를 찾을 수 없습니다."),
    NOT_FOUND_ACCOUNT(400, "계정을 찾을 수 없습니다."),

    ACCOUNT_EXIST(400, "존재하는 계정입니다."),

    NON_ACCESS_MODIFY(401, "수정권한이 없습니다."),
    ACCESS_TOKEN_EXPIRATION(401, "재 로그인이 필요합니다."),
    LOGIN_FAILURE(401, "아이디 혹은 비밀번호가 옳지 않습니다."),

    ILLEGAL_FILENAME(400, "잘못된 형식의 파일명입니다."),
    BATTERY_NOT_FOUND(400, "해당하는 ID의 배터리가 존재하지 않습니다.");


    @Getter
    private int status;
    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }

}
