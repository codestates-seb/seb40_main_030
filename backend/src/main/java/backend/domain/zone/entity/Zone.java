package backend.domain.zone.entity;

import backend.global.auditing.BaseTime;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor @NoArgsConstructor
@Entity @Getter @Setter @Builder
public class Zone extends BaseTime {

    @Id @GeneratedValue
    private Long id;

    private String name;

    private String details;

    private long latitude;

    private long longitude;

}
