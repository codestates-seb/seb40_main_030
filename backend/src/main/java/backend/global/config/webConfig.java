package backend.global.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class webConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {

        registry.addMapping("/**")
                .allowedOrigins("http://localhost:8080", "http://localhost:5173", "http://3.39.226.89:8080")  // 8080, front, ec2
                .allowedMethods("*")  // All Method
                .maxAge(3600)  // 3600sec == 1h
                .allowCredentials(true)
                .allowedHeaders("*")
                .exposedHeaders("*");
    }

}

// Security filter chaine 완성 전까지 사용할 임시 Cors 파일