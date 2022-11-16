package backend.domain.payment.entity;

import backend.global.auditing.BaseTime;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@NoArgsConstructor @AllArgsConstructor
@Entity @Getter @Setter @Builder
public class Payment extends BaseTime {
    @Id @GeneratedValue
    private Long id;

    private int totalPrice;

    private int totalBatteries;

}
