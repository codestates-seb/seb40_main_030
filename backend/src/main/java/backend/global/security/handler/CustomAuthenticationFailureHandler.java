package backend.global.security.handler;


import backend.global.exception.dto.BusinessLogicException;
import backend.global.exception.dto.ErrorResponse;
import backend.global.exception.exceptionCode.ExceptionCode;
import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import javax.security.auth.message.AuthException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class CustomAuthenticationFailureHandler implements AuthenticationFailureHandler {


    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
                                        AuthenticationException exception) throws IOException {

        log.error("# Authentication failed: {}", exception.getMessage());
        sendErrorResponse(response);
        //존재하지 않는 이메일일 경우
        //비밀번호가 틀린 경우 모두 진입함.
//        throw new BusinessLogicException(ExceptionCode.AUTHENTICATION_FAIL); // 이 코드 적용시 IOException 제거하기
    }

    private void sendErrorResponse(HttpServletResponse response) throws IOException {
        Gson gson = new Gson();
        ErrorResponse errorResponse = ErrorResponse.of(HttpStatus.UNAUTHORIZED);
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setStatus(HttpStatus.UNAUTHORIZED.value());
        response.getWriter().write(gson.toJson(errorResponse, ErrorResponse.class));
    }
}