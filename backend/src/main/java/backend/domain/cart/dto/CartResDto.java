package backend.domain.cart.dto;

import backend.domain.cart.entity.Cart;
import backend.global.auditing.BaseTime;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class CartResDto extends BaseTime {

    private Long cartId;
    private String startTime;
    private String endTime;

    public CartResDto(Cart cart) {
        this.cartId = cart.getId();
        this.startTime = cart.getStartTime();
        this.endTime = cart.getEndTime();
        setCreatedAt(cart.getCreatedAt());
        setModifiedAt(cart.getModifiedAt());
    }
}
