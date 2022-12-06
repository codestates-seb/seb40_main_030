package backend.domain.kakaoPay;

import backend.domain.payment.entity.Payment;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Data
@Getter
@Setter
@ToString
public class KakaoPayReadyVO {

    //response
    private String tid;
    private String next_redirect_pc_url;
    private String partner_order_id;
    private Date created_at;


}