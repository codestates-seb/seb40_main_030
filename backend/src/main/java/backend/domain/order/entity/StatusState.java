package backend.domain.order.entity;

import lombok.Getter;

public enum StatusState {
//    RESERVED("예약중"),
//    IN_USE("사용중"),
//    FINISHED("과거 내역");

    주문중("주문중"),
    예약중("예약중"),
    사용중("사용중"),
    과거내역("과거 내역");

    @Getter
    private String status;

    StatusState(String status) {
        this.status = status;
    }
}
