package backend.domain.battery.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

public class BatteryDto {
    @Getter
    @Setter
    public static class Post{
        @NotBlank(message = "type을 입력해주세요.")
        private String type;

        @NotNull(message = "상태를 설정해주세요.")
        private boolean status;

        @NotNull(message = "가격을 입력해주세요.")
        private int price;

        @URL
        private String photoURL;

        @NotNull(message ="ZONE ID 를 입력해주세요.")
        private long zoneId;
    }

    @Getter
    @Setter
    public static class Patch{
        private long batteryId;
        private boolean status;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response{
        private long batteryId;
        private String type;
        private boolean status;
        private int price;
        private String photoURL;
        private long zoneId;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}
