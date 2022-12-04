package backend.global.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class webConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {

        registry.addMapping("/**")
                // 8080, front, ec2, ngrok, 8090
                .allowedOrigins("http://localhost:8080", "http://localhost:5173", "http://3.39.226.89:8080",
                        "https://6786-222-233-138-154.jp.ngrok.io", "http://localhost:8090", "ec2-54-180-116-86.ap-northeast-2.compute.amazonaws.com:8080",
                        "ec2-54-180-116-86.ap-northeast-2.compute.amazonaws.com")
                .allowedMethods("GET", "POST", "PATCH", "DELETE", "*")  // All Method
                .maxAge(3600)  // 3600sec == 1h
                .allowCredentials(true)
                .allowedHeaders("*")
                .allowedOriginPatterns()
                .exposedHeaders("*");
    }

}

// Security filter chaine 완성 전까지 사용할 임시 Cors 파일