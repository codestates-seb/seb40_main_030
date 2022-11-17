package backend.domain.order.entity;

import lombok.Getter;

public enum OrderState {
    IN_ORDERS(0,"주문중"),
    RESERVED(1,"예약중"),
    IN_USE(2,"사용중"),
    FINISHED(3,"과거 내역");

    @Getter
    private int code;
    @Getter
    private String message;


    OrderState(int code, String message) {
        this.code = code;
        this.message = message;

    }
}
