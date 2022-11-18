package backend.domain.cart.dto;

import backend.domain.cart.entity.Cart;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
public class CartPatchReqDto {

    private Long cartId;
    private String startTime;
    private String endTime;

    public Cart toCart() {
        Cart cart = new Cart().builder()
                .id(this.cartId)
                .startTime(this.startTime)
                .endTime(this.endTime)
                .build();
        cart.setModifiedAt(LocalDateTime.now());

        return cart;
    }
}