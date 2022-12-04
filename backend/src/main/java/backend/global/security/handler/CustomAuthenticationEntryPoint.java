package backend.global.security.handler;

import backend.global.exception.advice.ErrorResponder;
import backend.global.exception.dto.BusinessLogicException;
import backend.global.exception.exceptionCode.ExceptionCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component @Slf4j
public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,
                         AuthenticationException authException) throws IOException, ServletException {

        Exception exception = (Exception) request.getAttribute("exception");
        ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED);  // unauthorized 에러 나오는 구간. 이 부분 수정해야 메서지까지 같이 나감

        logExceptionMessage(authException, exception);
        //권한이 필요한 리소스에 대해 접근하는데, 권한이 존재하지 않는 경우 진입
        throw new BusinessLogicException(ExceptionCode.NON_ACCESS_MODIFY);

    }


    private void logExceptionMessage (AuthenticationException authenticationException, Exception exception) {
        String message = exception != null ? exception.getMessage() : authenticationException.getMessage();
        log.warn("Unauthorized error happened: {}", message);
    }

}
