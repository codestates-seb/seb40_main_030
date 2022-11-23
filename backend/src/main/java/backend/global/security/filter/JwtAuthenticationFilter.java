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

    private final MemberMapper memberMapper;
    private final Gson gson;

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

        ObjectMapper objectMapper = new ObjectMapper();

        LoginDto loginDto;
        try {
            loginDto = objectMapper.readValue(request.getInputStream(), LoginDto.class);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword());

        return authenticationManager.authenticate(usernamePasswordAuthenticationToken);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) throws IOException, ServletException {

        Member authenticatedMember = (Member) authResult.getPrincipal();

        String accessToken = delegateGenerateAccessToken(authenticatedMember);
        String refreshToken = delegateGenerateRefreshToken(authenticatedMember.getNickname());


        response.setHeader("Authorization", "bearer"+accessToken);
        response.setHeader("Refresh", refreshToken);

        setResponseBody(response, authenticatedMember);
//        this.getSuccessHandler().onAuthenticationSuccess(request, response, authResult);  // 추가
    }

    private void setResponseBody(HttpServletResponse httpServletResponse, Member authenticatedMember) throws IOException {

        MemberDto.Response response = memberMapper.memberToMemberDtoResponse(authenticatedMember);
        SingleResDto singleResponseDto = new SingleResDto(response);
        String content = gson.toJson(singleResponseDto);
        httpServletResponse.getWriter().write(content);
    }

    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed) throws IOException, ServletException {

        super.unsuccessfulAuthentication(request, response, failed);
    }

    private String delegateGenerateAccessToken(Member member) {

        Map<String, Object> claims = new HashMap<>();
        claims.put("email", member.getEmail());
        claims.put("memberId", member.getId());

        Date currentDate = jwtTokenizer.getCurrentDate();
        Date accessTokenExpDate = jwtTokenizer.getAccessTokenExpDate();
        String subject = member.getNickname();
        String secretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        return jwtTokenizer.createAccessToken(claims, currentDate, accessTokenExpDate, subject, secretKey);
    }

    private String delegateGenerateRefreshToken(String memberName) {

        Date currentDate = jwtTokenizer.getCurrentDate();
        Date refreshTokenExpDate = jwtTokenizer.getRefreshTokenExpDate();
        String subject = memberName;
        String secretKey =  jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        return jwtTokenizer.createRefreshToken(currentDate, refreshTokenExpDate, subject, secretKey);
    }
}