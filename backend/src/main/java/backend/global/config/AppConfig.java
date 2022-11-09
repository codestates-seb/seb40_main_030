package backend.global.config;

import backend.global.p6spy.P6spySqlFormatConfig;
import com.p6spy.engine.spy.P6SpyOptions;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;

@Configuration
public class AppConfig {

    @PostConstruct  // DI에 사용. 생성자 호출시, Bean을 초기화 해주는 역할
    public void setLogMessageFormat () {
        P6SpyOptions.getActiveInstance().setLogMessageFormat(P6spySqlFormatConfig.class.getName());
    }

}