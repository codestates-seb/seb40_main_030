package backend.global.security.filter;


import backend.domain.member.wrapper.WrapperUserNamePasswordAuthenticationToken;

import backend.global.exception.dto.BusinessLogicException;
import backend.global.exception.exceptionCode.ExceptionCode;
import backend.global.security.jwt.JwtTokenizer;
import backend.global.security.utils.CustomAuthorityUtil;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.security.SignatureException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.security.auth.message.AuthException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


/** 토큰 검증 필터 **/
@RequiredArgsConstructor
public class JwtVerificationFilter extends OncePerRequestFilter {

    //-- 필요 작업
    //토큰이 유효한지
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtil customAuthorityUtil;
    private final RedisTemplate redisTemplate;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {


        try {
            String header = request.getHeader("Authorization");
            String jws = header.replace("bearer", "");

            //토큰 검증
            Map<String, Object> claims = verifyJws(request); //검증 부분, 파싱할때 Long이였던 memberId가 자동으로 Integer로 파싱됨..

            //로그아웃 토큰 여부 확인, 정상적인 토큰일 경우만 로그아웃 여부 확인
            verifyLoginToken(jws);

            setSecurityContext(claims);

            filterChain.doFilter(request, response);
        } catch (ExpiredJwtException e) {

            throw new BusinessLogicException(ExceptionCode.AUTHENTICATION_FAIL);

        } catch (SignatureException e) {

            throw new BusinessLogicException(ExceptionCode.AUTHENTICATION_FAIL);

        } catch (RuntimeException e) {

            throw new BusinessLogicException(ExceptionCode.AUTHENTICATION_FAIL);
        }

    }

    private Map<String, Object> verifyJws(HttpServletRequest request) {
        String jws = request.getHeader("Authorization").replace("Bearer ", "");
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        Map<String, Object> claims = jwtTokenizer.getJwsClaims(jws, base64EncodedSecretKey).getBody();

        return claims;
    }

    private void verifyLoginToken(String jws) {

        ValueOperations valueOperations = redisTemplate.opsForValue();
        String key = "logout_" + jws;
        String username = (String)valueOperations.get(key);

        if(username != null)
            throw new BusinessLogicException(ExceptionCode.NOT_FOUND);
    }


    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {

        if (request.getHeader("Authorization") == null || !request.getHeader("Authorization").startsWith("bearer")) {
            return true;
        }

        return false;
    }



    private void setSecurityContext(Map<String, Object> claims) {

        long memberId = (Integer)claims.get("memberId");
        String username = claims.get("username").toString();
        List<String> roles = (List)claims.get("roles");


        List<GrantedAuthority> grantedAuthorities = customAuthorityUtil.convertStringToGrantedAuthority(roles);

        SecurityContext sc = SecurityContextHolder.getContext();

        WrapperUserNamePasswordAuthenticationToken wrapperUserNamePasswordAuthenticationToken = new WrapperUserNamePasswordAuthenticationToken(username, null, grantedAuthorities, memberId);

        sc.setAuthentication(wrapperUserNamePasswordAuthenticationToken);

    }


}