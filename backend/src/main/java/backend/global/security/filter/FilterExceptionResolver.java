package backend.global.security.filter;

import backend.global.exception.exceptionCode.AuthException;
import backend.global.exception.exceptionCode.ExceptionCode;
import com.google.gson.Gson;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@RequiredArgsConstructor
public class FilterExceptionResolver {

    private String contentType = "application/json;charset=UTF-8";
    private final Gson gson;

    public void handleException(RuntimeException e,HttpServletResponse response) throws IOException {

        if (e instanceof AuthException) {
            System.out.println("캐치 제대로함!");

            AuthException authException = (AuthException) e;
            sendErrorResponse(response,authException.getExceptionCode());
        }
        else {
            log.warn(e.getMessage());
            response.getWriter().write(e.getMessage());
        }

    }


    private void sendErrorResponse(HttpServletResponse response, ExceptionCode exceptionCode) throws IOException {
        response.setContentType(contentType);
        response.setStatus(exceptionCode.getStatus());
    }

}
