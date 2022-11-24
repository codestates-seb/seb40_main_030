package backend.global.security.config;

import backend.domain.member.mapper.MemberMapper;
import backend.global.security.filter.FilterChainExceptionHandlerFilter;
import backend.global.security.filter.FilterExceptionResolver;
import backend.global.security.filter.JwtAuthenticationFilter;
import backend.global.security.filter.JwtVerificationFilter;
import backend.global.security.handler.CustomAuthenticationFailureHandler;
import backend.global.security.handler.CustomAuthenticationSuccesshandler;
import backend.global.security.jwt.JwtTokenizer;
import backend.global.security.utils.CustomAuthorityUtils;
import com.google.gson.Gson;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.authentication.logout.LogoutFilter;

@RequiredArgsConstructor
public class CustomFilterConfig extends AbstractHttpConfigurer<CustomFilterConfig, HttpSecurity> {

    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils customAuthorityUtils;
    private final RedisTemplate redisTemplate;
    // 매퍼와 Gson 사용시 역직렬화 과정에서 에러 발생하여 제거했습니다.


    @Override
    public void configure(HttpSecurity builder) throws Exception {

        AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

        // 인증 처리 필터
        JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
        // 로그인 url
        jwtAuthenticationFilter.setFilterProcessesUrl("/auth/login"); // 노션 페이지 공지에 맞춤
        jwtAuthenticationFilter.setAuthenticationSuccessHandler(new CustomAuthenticationSuccesshandler());
        jwtAuthenticationFilter.setAuthenticationFailureHandler(new CustomAuthenticationFailureHandler());

        //토큰 검증 필터
        JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, customAuthorityUtils, redisTemplate);

        //인증, 토큰 검증 필터 등록
        builder.addFilter(jwtAuthenticationFilter)
                .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);

    }
}