package backend.domain.order.service;

import backend.domain.order.entity.Order;
import backend.domain.order.entity.StatusState;
import backend.domain.order.repository.OrderRepository;
import backend.global.exception.dto.BusinessLoginException;
import backend.global.exception.exceptionCode.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service @RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;

    public Order createOrder (Order order) {
        // 주문 테이블은 기본적으로 주문중으로 들어감
        return orderRepository.save(order);
    }

    public Order modifyOrder (Order order) {
        orderRepository.findById(order.getId())
                .orElseThrow(() -> new BusinessLoginException(ExceptionCode.NOT_FOUND));

        return orderRepository.save(order);
    }

    public void deleteOrder (Long orderId) {
        Order existOrder = orderRepository.findById(orderId)
                .orElseThrow(() -> new BusinessLoginException(ExceptionCode.NO_CONTENT));
        orderRepository.delete(existOrder);
    }

    public Order findOrder (Long orderId) {

        return orderRepository.findById(orderId)
                .orElseThrow(() -> new BusinessLoginException(ExceptionCode.NO_CONTENT));
    }

    public Page<Order> findOrders(Pageable pageable) {
        return orderRepository.findAllByOrderByCreatedAtDesc(pageable);
    }

}
