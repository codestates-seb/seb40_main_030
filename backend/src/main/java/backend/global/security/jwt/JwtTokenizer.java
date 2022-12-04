package backend.global.security.jwt;

import backend.domain.member.entity.Member;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.*;


@Component
public class JwtTokenizer {
    @Getter @Value("${jwt.key.secret}")
    private String secretKey;

    @Getter @Value("${jwt.access-token-expiration-minutes}")
    private int accessTokenExpirationMinutes;

    @Getter @Value("${jwt.refresh-token-expiration-minutes}")
    private int refreshTokenExpirationMinutes;


    public String encodeBase64SecretKey(String secretKey) {
        return Encoders.BASE64.encode(secretKey.getBytes(StandardCharsets.UTF_8));
    }


    public String createAccessToken(Map<String,Object> claims, String subject, Date expAt, String base64EncodedSecretKey) {

        Key key = getSecretKeyFromPlainSecretKey(base64EncodedSecretKey);

        String accessKey = Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(Calendar.getInstance().getTime())
                .setExpiration(expAt)
                .signWith(key)
                .compact();

        return accessKey;
    }


    public String createRefreshToken(String subject, Date expAt, String base64EncodedSecretKey) {

        Key key  = getSecretKeyFromPlainSecretKey(base64EncodedSecretKey);

        String accessKey = Jwts.builder()
                .setSubject(subject)
                .setIssuedAt(Calendar.getInstance().getTime())
                .setExpiration(expAt)
                .signWith(key)
                .compact();

        return accessKey;
    }

//    public Map<String, Object> verifyJws(String jws) {
//        Jws<Claims> jwsClaims = getJwsClaims(jws);
//        Map<String, Object> claims = jwsClaims.getBody();
//        return claims;
//    }

    // 검증 후, Claims을 반환 하는 용도
    public Jws<Claims> getJwsClaims(String jws, String base64EncodedSecretKey) {
        Key key = getSecretKeyFromPlainSecretKey(base64EncodedSecretKey);

        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(jws);
    }


    // 단순히 검증만 하는 용도로 쓰일 경우 (위랑 반환타입만 다름)
    public void verifySignature(String jws, String base64EncodedSecretKey) {
        Key key = getSecretKeyFromPlainSecretKey(base64EncodedSecretKey);

        Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(jws);
    }


    public Date getTokenExpiration(int expirationMinutes) {
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.MINUTE, expirationMinutes);
        Date expiration = calendar.getTime();

        return expiration;
    }


    public Key getSecretKeyFromPlainSecretKey(String base64EncodedSecretKey) {
        byte[] keyBytes = Decoders.BASE64.decode(base64EncodedSecretKey);

        return Keys.hmacShaKeyFor(keyBytes);
    }

    public String delegateAccessToken(Member member) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("username", member.getEmail());
        claims.put("role", member.getRoles());
        claims.put("id", member.getId());   //claim에 id 넣는게 좋을까? subject 대신에

        String subject = String.valueOf(member.getId());
        Date expiration = getTokenExpiration(getAccessTokenExpirationMinutes());
        String base64EncodedSecretKey = encodeBase64SecretKey(getSecretKey());

        String accessToken = createAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        return accessToken;
    }

    public String delegateRefreshToken(Member member) {
        String subject = String.valueOf(member.getId());
        Date expiration = getTokenExpiration(getRefreshTokenExpirationMinutes());
        String base64EncodedSecretKey = encodeBase64SecretKey(getSecretKey());

        String refreshToken = createRefreshToken(subject, expiration, base64EncodedSecretKey);

        return refreshToken;
    }
}