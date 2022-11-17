package backend.domain.cart.service;

import backend.domain.battery.entity.Battery;
import backend.domain.battery.repository.BatteryRepository;
import backend.domain.cart.entity.Cart;
import backend.domain.cart.repository.CartRepository;
import backend.global.exception.dto.BusinessLogicException;
import backend.global.exception.exceptionCode.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service @RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;

    private final BatteryRepository batteryRepository;

    public Cart createCart(Cart cart, Long memberId) {
//        cart.setBatteries(batteryRepository.findAllByMemberId(memberId)); // 엔티티 매핑 이후 사용

        return cartRepository.save(cart);
    }

    public Cart modifyCart(Cart cart) {
        Cart savedCart = cartRepository.findById(cart.getId())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND));
        Optional.ofNullable(cart.getStartTime()).ifPresent(savedCart::setStartTime);
        Optional.ofNullable(cart.getEndTime()).ifPresent(savedCart::setEndTime);
        savedCart.setModifiedAt(LocalDateTime.now());

        return cartRepository.save(savedCart);
    }

    public void deleteCart(Long cartId) {
        Cart existCart = cartRepository.findById(cartId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND));

        cartRepository.delete(existCart);
    }

    public Cart findCart(Long cartId) {

        return cartRepository.findById(cartId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND));
    }

    public Page<Cart> findCarts(Pageable pageable) {

        return cartRepository.findAllByOrderByCreatedAtDesc(pageable);
    }

}
