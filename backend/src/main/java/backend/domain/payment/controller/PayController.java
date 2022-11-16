package backend.domain.payment.controller;

import backend.domain.payment.dto.PayPatchReqDto;
import backend.domain.payment.dto.PayPostReqDto;
import backend.domain.payment.dto.PayResDto;
import backend.domain.payment.entity.Payment;
import backend.domain.payment.service.PaymentService;
import backend.global.dto.SingleResDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@RestController @RequestMapping("/payments")
public class PayController {

    private final PaymentService paymentService;

    @PostMapping
    public ResponseEntity<PayResDto> postPayment (@RequestBody PayPostReqDto payPostReqDto) {
        Payment payment = payPostReqDto.toPayment();
        Payment savedPayment = paymentService.postPayment(payment);
        PayResDto response = new PayResDto(savedPayment);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }


    @PatchMapping("/{paymentId}")
    public ResponseEntity<SingleResDto<String>> patchPayment (@PathVariable Long paymentId,
                                                         @RequestBody PayPatchReqDto payPatchReqDto) {
        Payment payment = payPatchReqDto.toPayment();
        Payment modifiedPayment = paymentService.patchPayment(payment);
        PayResDto response = new PayResDto(modifiedPayment);

        return new ResponseEntity<>(new SingleResDto<>("success modify"), HttpStatus.OK);
    }


    @DeleteMapping("/{paymentId}")
    public ResponseEntity<SingleResDto<String>> deletePayment (@PathVariable Long paymentId) {
        paymentService.deletePayment(paymentId);

        return new ResponseEntity<>(new SingleResDto<>("success create"), HttpStatus.OK);
    }


    @GetMapping("/{paymentId}")
    public ResponseEntity<Payment> getPayment (@PathVariable Long paymentId) {
        Payment payment = new Payment().builder()
                .totalPrice(1000)
                .totalBatteries(1)
                .build();

        return new ResponseEntity<>(payment, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<Page> getPayments (Pageable pageable) {
        List<Payment> list = new ArrayList<>();
        for (int i = 1 ; i<=10 ; i++) {
            Payment payment = new Payment().builder()
                    .totalPrice(1000*i)
                    .totalBatteries(i)
                    .build();
            list.add(payment);
        }
        Page<Payment> page = new PageImpl(list, pageable, list.size());
        return new ResponseEntity<>(page, HttpStatus.OK);
    }

}
