package backend.domain.payment.entity;

import lombok.Getter;

public enum PayStatus {
    IN_PROGRESS(0,"결제 진행중"),
    WAITING_FOR_RESERVATION(1,"결제 완료 예약 대기중"),
    USE_NOW(2,"사용중"),
    HISTORY(3,"사용완료"),
    FAIL(4,"결제 실패"),
    CANCELED(5, "결제 취소");

    @Getter
    private int code;
    @Getter
    private String message;


    PayStatus(int code, String message) {
        this.code = code;
        this.message = message;

    }
}
