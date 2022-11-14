package backend.domain.order.controller;

import backend.domain.order.dto.OrderPatchReqDto;
import backend.domain.order.dto.OrderPostReqDto;
import backend.domain.order.dto.OrderResDto;
import backend.domain.order.entity.Order;
import backend.domain.order.entity.StatusState;
import backend.domain.order.service.OrderService;
import backend.global.dto.PageInfoDto;
import backend.global.dto.SingleResDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@RestController @RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;

    @PostMapping
    public ResponseEntity<OrderResDto> postOrder (@RequestBody OrderPostReqDto orderPostReqDto) {
        Order order = orderPostReqDto.toOrder();
        Order createdOrder = orderService.createOrder(order);
        OrderResDto orderResDto = new OrderResDto(createdOrder);

        return new ResponseEntity<>(orderResDto, HttpStatus.CREATED);
    }


    @PatchMapping("/{orderId}")
    public ResponseEntity<OrderResDto> patchOrder (@PathVariable Long orderId,
                                                            @RequestBody OrderPatchReqDto orderPatchReqDto) {
        orderPatchReqDto.setOrderId(orderId);
        Order order = orderPatchReqDto.toOrder();
        Order modifiedOrder = orderService.modifyOrder(order);
        OrderResDto orderResDto = new OrderResDto(modifiedOrder);

        return new ResponseEntity<>(orderResDto, HttpStatus.OK);
    }


    @DeleteMapping("/{orderId}")
    public ResponseEntity<SingleResDto<String>> deleteOrder (@PathVariable Long orderId) {
        orderService.deleteOrder(orderId);
        return new ResponseEntity<>(new SingleResDto<>("success delete"), HttpStatus.OK);
    }


    @GetMapping("/{orderId}")
    public ResponseEntity<OrderResDto> getOrder (@PathVariable Long orderId) {

        Order existOrder = orderService.findOrder(orderId);
        OrderResDto orderResDto = new OrderResDto(existOrder);

        return new ResponseEntity<>(orderResDto, HttpStatus.OK);
    }


    @GetMapping
    public ResponseEntity<PageInfoDto> getOrders (Pageable pageable) {
//        Mock 데이터
        List<Order> list = new ArrayList<>();
        for (int i=1 ; i<=10 ; i++) {
            Order order = new Order();
            order.setId(1L + i);
            order.setStatus(StatusState.사용중);
            order.setStartTime(String.format("2022.11.1%d.10",i));
            order.setEndTime(String.format("2022.11.1%d.10",i+1));
            order.setCreatedAt(LocalDateTime.now());
            order.setModifiedAt(LocalDateTime.now());
            list.add(order);
        }
        Page<Order> page = new PageImpl<>(list, pageable, list.size());

//         실제 사용할 API
//        Page<Order> page = orderService.findOrders(pageable);

        return new ResponseEntity<>(new PageInfoDto(page), HttpStatus.OK);
    }

}