package backend.global.security.utils;

import backend.global.security.jwt.JwtTokenizer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@RequiredArgsConstructor @Component
public class JwtExtractUtils {

    private final JwtTokenizer jwtTokenizer;

    public Long extractMemberIdFromJwt (HttpServletRequest request) {
        String jws = request.getHeader("Authorization").replace("Bearer ", "");
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        Map<String, Object> claims = jwtTokenizer.getJwsClaims(jws, base64EncodedSecretKey).getBody();
        Object value = claims.get("memberId");
        Long memberId = Long.valueOf(String.valueOf(value));

        return memberId;
    }

    public String extractEmailFromJwt (HttpServletRequest request) {
        String jws = request.getHeader("Authorization").replace("Bearer ", "");
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        Map<String, Object> claims = jwtTokenizer.getJwsClaims(jws, base64EncodedSecretKey).getBody();
        Object value = claims.get("email");
        String email = String.valueOf(String.valueOf(value));

        return email;
    }

}
