package backend.global.security.config;


import backend.domain.member.mapper.MemberMapper;
import backend.global.security.filter.FilterChainExceptionHandlerFilter;
import backend.global.security.filter.FilterExceptionResolver;
import backend.global.security.filter.JwtAuthenticationFilter;
import backend.global.security.filter.JwtVerificationFilter;
import backend.global.security.handler.CustomAccessDeniedHandler;
import backend.global.security.handler.CustomAuthenticationEntryPoint;
import backend.global.security.handler.CustomAuthenticationFailureHandler;
import backend.global.security.handler.CustomAuthenticationSuccesshandler;
import backend.global.security.jwt.JwtTokenizer;
import backend.global.security.utils.CustomAuthorityUtil;
import com.google.gson.Gson;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.logout.LogoutFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@EnableWebSecurity //등록 필터 로그로 확인 위해
@Configuration
@RequiredArgsConstructor
public class SecurityConfiguration {


    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtil customAuthorityUtil;

    private final RedisTemplate redisTemplate;
//    @Value("${client.url}")
//    private String clientUrl;

    private final Gson gson;

    private final MemberMapper memberMapper;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {


        httpSecurity.headers().frameOptions().sameOrigin()
                .and()
                .cors().configurationSource(corsConfigurationSource())
                .and()
                .csrf().disable()
                .formLogin().disable()
                .httpBasic().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .exceptionHandling()
                .accessDeniedHandler(new CustomAccessDeniedHandler()) //권한에 맞지 않는 요청시 거부핸들러, 인증은 됬지만 권한에 맞지 않는 리소스 요청시
                .authenticationEntryPoint(new CustomAuthenticationEntryPoint()); //인증 처리시 예외처리 핸들러, 권한이 필요한 리소스에 대해 접근하는데 인증을 하지 않아 Anonnymous 인 유저일 경우 발생 처리
//                .and()
//                .authorizeHttpRequests(authorize -> authorize
                     //api 삽입

        return httpSecurity.build();
    }




    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {

        @Override
        public void configure(HttpSecurity builder) throws Exception {

            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);


            //인증 처리 필터
            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer, memberMapper, gson);

            jwtAuthenticationFilter.setFilterProcessesUrl("/api/members/login");

            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new CustomAuthenticationSuccesshandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new CustomAuthenticationFailureHandler());


            //토큰 검증 필터
            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, customAuthorityUtil, redisTemplate);


            //인증, 토큰 검증 필터 등록
            builder.addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);

            //인증 관련 예외처리 필터 등록

            builder.addFilterBefore(new FilterChainExceptionHandlerFilter(new FilterExceptionResolver(gson)), LogoutFilter.class);

        }
    }





    //cors 설정자 빈 등록
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
//        configuration.setAllowedOrigins(Arrays.asList(clientUrl));
//        configuration.setAllowedMethods(Arrays.asList("*"));

        configuration.addAllowedOriginPattern("*");
        configuration.addAllowedHeader("*");
        configuration.addAllowedMethod("*");
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
    PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}
