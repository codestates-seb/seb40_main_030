package backend.domain.order.entity;

import lombok.Getter;

public enum StatusState {
    RESERVED("예약중"),
    IN_USE("사용중"),
    FINISHED("과거 내역");

    @Getter
    private String status;

    StatusState(String status) { this.status = status; }
}
