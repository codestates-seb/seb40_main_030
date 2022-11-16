package backend.domain.order.service;

import backend.domain.order.entity.Order;
import backend.domain.order.repository.OrderRepository;
import backend.global.exception.dto.BusinessLogicException;
import backend.global.exception.exceptionCode.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service @RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;

    public Order createOrder (Order order) {
        // 주문 테이블은 기본적으로 주문중으로 들어감
        return orderRepository.save(order);
    }

    public Order modifyOrder (Order order) {
        Order savedOrder = orderRepository.findById(order.getId())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND));

        savedOrder.setStatus(order.getStatus());
        savedOrder.setStartTime(order.getStartTime());
        savedOrder.setEndTime(order.getEndTime());
        savedOrder.setModifiedAt(LocalDateTime.now());

        return orderRepository.save(savedOrder);
    }

    public void deleteOrder (Long orderId) {
        Order existOrder = orderRepository.findById(orderId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND));

        orderRepository.delete(existOrder);
    }

    public Order findOrder (Long orderId) {

        return orderRepository.findById(orderId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND));
    }

    public Page<Order> findOrders(Pageable pageable) {

        return orderRepository.findAllByOrderByCreatedAtDesc(pageable);
    }

}
