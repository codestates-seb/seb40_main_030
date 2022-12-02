package backend.global.security.handler;

import backend.domain.member.entity.Member;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Slf4j @RequiredArgsConstructor
public class CustomAuthenticationSuccesshandler implements AuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException {
        log.info("success login");
        Member member = (Member) authentication.getPrincipal();

        // 더미 데이터
        List<String> adminMailAddress = new ArrayList<>();
        adminMailAddress.add("admin@gmail.com");
        adminMailAddress.add("admin1@gmail.com");
        adminMailAddress.add("admin2@gmail.com");
        adminMailAddress.add("admin3@gmail.com");

        if(adminMailAddress.contains(member.getEmail())) {
            response.getWriter().print("Success ADMIN");
        } else {
            response.getWriter().print("Success USER");
        }

        response.getWriter().flush();
    }

}