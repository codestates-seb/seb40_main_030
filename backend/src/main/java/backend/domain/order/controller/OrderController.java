package backend.domain.order.controller;

import backend.domain.order.dto.OrderPatchReqDto;
import backend.domain.order.dto.OrderPostReqDto;
import backend.domain.order.dto.OrderResDto;
import backend.domain.order.entity.Order;
import backend.domain.order.entity.StatusState;
import backend.global.dto.PageInfoDto;
import backend.global.dto.SingleResDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController @RequestMapping("/orders")
public class OrderController {

    @PostMapping
    public ResponseEntity<SingleResDto<OrderResDto>> postOrder (@RequestBody OrderPostReqDto orderPostReqDto) {
        Order order = orderPostReqDto.toOrder();
        order.setStatus(StatusState.RESERVED);
        OrderResDto orderResDto = new OrderResDto(order);

        return new ResponseEntity<>(new SingleResDto<>(orderResDto), HttpStatus.CREATED);
    }


    @PatchMapping("/{orderId}")
    public ResponseEntity<SingleResDto<OrderResDto>> patchOrder (@PathVariable Long orderId,
                                                            @RequestBody OrderPatchReqDto orderPatchReqDto) {
        orderPatchReqDto.setOrderId(orderId);
        Order order = orderPatchReqDto.toOrder();
        OrderResDto orderResDto = new OrderResDto(order);

        return new ResponseEntity<>(new SingleResDto<>(orderResDto), HttpStatus.OK);
    }


    @DeleteMapping("/{orderId}")
    public ResponseEntity<SingleResDto<String>> deleteOrder (@PathVariable Long orderId) {

        return new ResponseEntity<>(new SingleResDto<>("success delete"), HttpStatus.OK);
    }

    @GetMapping("/{orderId}")
    public ResponseEntity<OrderResDto> getOrder (@PathVariable Long orderId) {
        Order order = new Order();
        order.setId(orderId);
        order.setStatus(StatusState.IN_USE);
        order.setStartTime(String.format("2022.11.11.10"));
        order.setEndTime(String.format("2022.11.12.10"));
        order.setCreatedAt(LocalDateTime.now());
        order.setModifiedAt(LocalDateTime.now());
        OrderResDto orderResDto = new OrderResDto(order);

        return new ResponseEntity<>(orderResDto, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<PageInfoDto> getOrders (Pageable pageable) {
        List<Order> list = new ArrayList<>();
        for (int i=1 ; i<=10 ; i++) {
            Order order = new Order();
            order.setId(1L + i);
            order.setStatus(StatusState.RESERVED);
            order.setStartTime(String.format("2022.11.1%d.10",i));
            order.setEndTime(String.format("2022.11.1%d.10",i+1));
            order.setCreatedAt(LocalDateTime.now());
            order.setModifiedAt(LocalDateTime.now());
            list.add(order);
        }
        Page<Order> page = new PageImpl<>(list, pageable, list.size());

        return new ResponseEntity<>(new PageInfoDto(page), HttpStatus.OK);
    }
}