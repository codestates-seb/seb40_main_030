package backend.global.security.config;


import backend.domain.member.mapper.MemberMapper;
import backend.global.security.handler.CustomAccessDeniedHandler;
import backend.global.security.handler.CustomAuthenticationEntryPoint;
import backend.global.security.jwt.JwtTokenizer;
import backend.global.security.utils.CustomAuthorityUtils;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;


@EnableWebSecurity //등록 필터 로그로 확인 위해
@Configuration @RequiredArgsConstructor
public class SecurityConfiguration {

    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils customAuthorityUtil;
    private final MemberMapper memberMapper;
    private final RedisTemplate redisTemplate;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

        return httpSecurity
                .headers().frameOptions().sameOrigin()
                .and()
                .cors().configurationSource(corsConfigurationSource())
                .and()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .accessDeniedHandler(new CustomAccessDeniedHandler()) //권한에 맞지 않는 요청시 거부핸들러, 인증은 됬지만 권한에 맞지 않는 리소스 요청시
                .authenticationEntryPoint(new CustomAuthenticationEntryPoint()) //인증 처리시 예외처리 핸들러, 권한이 필요한 리소스에 대해 접근하는데 인증을 하지 않아 Anonnymous 인 유저일 경우 발생 처리
                .and()
                .apply(new CustomFilterConfig(jwtTokenizer, customAuthorityUtil, redisTemplate))
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        // USER, ADMIN 권한 설정해주는 부분
//                        .antMatchers(HttpMethod.POST, "/*/members").permitAll()
                        .anyRequest().permitAll()
                ).build();
    }


    //CORS 설정 구간
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedOriginPattern("*");
        configuration.addAllowedOrigin("http://localhost:5173, http://localhost:8080");
        configuration.addAllowedMethod("*");
        configuration.addAllowedHeader("*");
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }


    //등록 필터 로그로 확인 위해
    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.debug(true);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

}
