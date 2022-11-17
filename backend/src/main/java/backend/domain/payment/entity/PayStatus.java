package backend.domain.payment.entity;

import lombok.Getter;

public enum PayStatus {
    IN_PROGRESS(0,"결제 진행중"),
    SUCCESS(1,"결제 완료"),
    FAIL(2,"결제 실패"),
    CANCELED(3, "결제 취소");

    @Getter
    private int code;
    @Getter
    private String message;


    PayStatus(int code, String message) {
        this.code = code;
        this.message = message;

    }
}
