package backend.global.security.jwt;

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
    @Getter
    @Value("${jwt.secret-key}")
    private String secretKey;

    @Getter
    @Value("${jwt.access-token-expiration-minutes}")
    private int accessTokenExpirationMinutes;

    @Getter
    @Value("${jwt.refresh-token-expiration-minutes}")
    private int refreshTokenExpirationMinutes;


    public String encodeBase64SecretKey(String secretKey) {
        return Encoders.BASE64.encode(secretKey.getBytes(StandardCharsets.UTF_8));
    }


    public String createAccessToken(Map<String,Object> claims,
                                    Date issuedAt,
                                    Date expAt,
                                    String subject,
                                    String base64EncodedSecretKey
    ) {
        Key key = getSecretKeyFromPlainSecretKey(base64EncodedSecretKey);

        String accessKey = Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(issuedAt)
                .setExpiration(expAt)
                .signWith(key)
                .compact();

        return accessKey;
    }


    public String createRefreshToken(Date issuedAt,
                                     Date expAt,
                                     String subject,
                                     String base64EncodedSecretKey) {
        Key key  = getSecretKeyFromPlainSecretKey(base64EncodedSecretKey);

        String accessKey = Jwts.builder()
                .setSubject(subject)
                .setIssuedAt(issuedAt)
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



    public Date getAccessTokenExpDate() {

        Calendar currentCalendar = Calendar.getInstance();
        currentCalendar.add(Calendar.MINUTE, accessTokenExpirationMinutes);
        return currentCalendar.getTime();
    }

    public Date getRefreshTokenExpDate() {

        Calendar currentCalendar = Calendar.getInstance();
        currentCalendar.add(Calendar.MINUTE, refreshTokenExpirationMinutes);
        return currentCalendar.getTime();
    }

    public Date getCurrentDate() {

        Calendar currentCalendar = Calendar.getInstance();
        return currentCalendar.getTime();
    }

    public Key getSecretKeyFromPlainSecretKey(String base64EncodedSecretKey) {

        byte[] keyBytes = Decoders.BASE64.decode(base64EncodedSecretKey);
        Key key = Keys.hmacShaKeyFor(keyBytes);

        return key;

    }

    public Jws<Claims> getJwsClaims(String jws, String base64EncodedSecretKey) {
        Key key = getSecretKeyFromPlainSecretKey(base64EncodedSecretKey);

        Jws<Claims> claimsJws = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(jws);

        return claimsJws;
    }
}