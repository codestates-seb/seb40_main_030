package backend.global.exception.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ErrorResponse {
    private int status;  // 에러코드번호

    private String exception; // 예외명 (예외 분류)

    private String message; // 에러메세지
}
