package backend.global.security.filter;

import lombok.RequiredArgsConstructor;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@RequiredArgsConstructor
public class FilterChainExceptionHandlerFilter extends OncePerRequestFilter {

    //실질적으로 예외처리를 하는 클래스
    private final FilterExceptionResolver filterExceptionResolver;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        //인증, 토큰 검증 필터 앞에 등록하였기 때문에, 해당 부분에서 Exception 발생시 무조건 하단에 catch문에 걸리게 되어 있음
        try {
            filterChain.doFilter(request, response);
        } catch (RuntimeException e) {
            filterExceptionResolver.handleException(e, response);
        }
    }
}
