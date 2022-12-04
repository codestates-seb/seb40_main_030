package backend.global.security.filter;

import backend.domain.member.dto.MemberDto;
import backend.domain.member.entity.Member;
import backend.domain.member.mapper.MemberMapper;
import backend.global.dto.SingleResDto;
import backend.global.security.dto.LoginDto;
import backend.global.security.jwt.JwtTokenizer;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/** 인증처리 필터 **/
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenizer jwtTokenizer;

    @SneakyThrows @Override
    public Authentication attemptAuthentication (HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

        ObjectMapper objectMapper = new ObjectMapper();

        LoginDto loginDto;
        try {
            loginDto = objectMapper.readValue(request.getInputStream(), LoginDto.class);
        }
        catch (IOException e) {
            throw new RuntimeException(e);
        }

        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword());

        return authenticationManager.authenticate(usernamePasswordAuthenticationToken);
    }


    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) throws IOException, ServletException {

        Member authenticatedMember = (Member) authResult.getPrincipal();

        String accessToken = delegateAccessToken(authenticatedMember);
        String refreshToken = delegateRefreshToken(authenticatedMember);

        response.setHeader("AccessToken", "Bearer " + accessToken);
        response.setHeader("RefreshToken", refreshToken);

        this.getSuccessHandler().onAuthenticationSuccess(request, response, authResult);  // 추가
    }


    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response,
                                              AuthenticationException failed) throws IOException, ServletException {

        super.unsuccessfulAuthentication(request, response, failed);
    }

    private String delegateAccessToken(Member member) {

        Map<String, Object> claims = new HashMap<>();
        // 여기서 뽑아오기 확인하기
        claims.put("email", member.getEmail());
        claims.put("memberId", member.getId());
        String subject = member.getEmail();
//        String subject = member.getNickname();
        Date accessTokenExpDate = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());
        String secretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        return jwtTokenizer.createAccessToken(claims, subject, accessTokenExpDate, secretKey);
    }


    private  String delegateRefreshToken(Member member) {
        String subject = member.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        return jwtTokenizer.createRefreshToken(subject, expiration, base64EncodedSecretKey);
    }

}