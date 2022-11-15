package backend.domain.zone.entity;

import backend.global.auditing.BaseTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor @NoArgsConstructor
@Entity @Getter @Setter
public class Zone extends BaseTime {

    @Id @GeneratedValue
    private Long id;

    private String name;

    private String details;

    private long latitude;

    private long longitude;

}
