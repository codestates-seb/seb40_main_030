package backend.domain.cart.controller;

import backend.domain.cart.dto.CartPatchReqDto;
import backend.domain.cart.dto.CartPostReqDto;
import backend.domain.cart.dto.CartResDto;
import backend.domain.cart.entity.Cart;
import backend.domain.cart.service.CartService;
import backend.global.dto.PageInfoDto;
import backend.global.dto.SingleResDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/carts")
public class CartController {

    private final CartService cartService;

    @PostMapping
    public ResponseEntity<CartResDto> postCart(@PathVariable Long memberId,
                                               @RequestBody CartPostReqDto cartPostReqDto) {
        Cart cart = cartPostReqDto.toCart();
        Cart createdCart = cartService.createCart(cart, memberId);
        CartResDto cartResDto = new CartResDto(createdCart);

        return new ResponseEntity<>(cartResDto, HttpStatus.CREATED);
    }


    @PatchMapping("/{cartId}")
    public ResponseEntity<CartResDto> patchCart(@PathVariable Long cartId,
                                                @RequestBody CartPatchReqDto cartPatchReqDto) {
        cartPatchReqDto.setCartId(cartId);
        Cart cart = cartPatchReqDto.toCart();
        Cart modifiedCart = cartService.modifyCart(cart);
        CartResDto cartResDto = new CartResDto(modifiedCart);

        return new ResponseEntity<>(cartResDto, HttpStatus.OK);
    }


    @DeleteMapping("/{cartId}")
    public ResponseEntity<SingleResDto<String>> deleteCart(@PathVariable Long cartId) {
        cartService.deleteCart(cartId);
        return new ResponseEntity<>(new SingleResDto<>("Success Delete"), HttpStatus.OK);
    }


    @GetMapping("/{cartId}")
    public ResponseEntity<CartResDto> getCart(@PathVariable Long cartId) {
        Cart existCart = cartService.findCart(cartId);
        CartResDto cartResDto = new CartResDto(existCart);

        return new ResponseEntity<>(cartResDto, HttpStatus.OK);
    }


    @GetMapping
    public ResponseEntity<PageInfoDto> getCarts(Pageable pageable) {
        Page<Cart> page = cartService.findCarts(pageable);

        return new ResponseEntity<>(new PageInfoDto(page), HttpStatus.OK);
    }

}