package backend.domain.cart.dto;

import backend.domain.cart.entity.Cart;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class CartPostReqDto {

    private String startTime;
    private String endTime;

    public Cart toCart() {
        Cart cart = new Cart().builder()
                .startTime(this.startTime)
                .endTime(this.endTime)
                .build();
        cart.setCreatedAt(LocalDateTime.now());
        cart.setModifiedAt(LocalDateTime.now());

        return cart;
    }
}
