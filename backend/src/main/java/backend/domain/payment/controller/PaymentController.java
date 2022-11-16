package backend.domain.payment.controller;

import backend.domain.payment.dto.PayPatchReqDto;
import backend.domain.payment.dto.PayPostReqDto;
import backend.domain.payment.dto.PayResDto;
import backend.domain.payment.entity.Payment;
import backend.domain.payment.service.PaymentService;
import backend.global.dto.PageInfoDto;
import backend.global.dto.SingleResDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController @RequestMapping("/payments")
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping
    public ResponseEntity<PayResDto> postPayment (@RequestBody PayPostReqDto payPostReqDto) {
        Payment payment = payPostReqDto.toPayment();
        Payment savedPayment = paymentService.postPayment(payment);
        PayResDto response = new PayResDto(savedPayment);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }


    @PatchMapping("/{paymentId}")
    public ResponseEntity<PayResDto> patchPayment (@PathVariable Long paymentId,
                                                         @RequestBody PayPatchReqDto payPatchReqDto) {
        Payment payment = payPatchReqDto.toPayment();
        payment.setId(paymentId);
        Payment modifiedPayment = paymentService.patchPayment(payment);
        PayResDto response = new PayResDto(modifiedPayment);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }


    @DeleteMapping("/{paymentId}")
    public ResponseEntity<SingleResDto<String>> deletePayment (@PathVariable Long paymentId) {
        paymentService.deletePayment(paymentId);

        return new ResponseEntity<>(new SingleResDto<>("Success Delete"), HttpStatus.OK);
    }


    @GetMapping("/{paymentId}")
    public ResponseEntity<Payment> getPayment (@PathVariable Long paymentId) {
        Payment payment = paymentService.getPayment(paymentId);

        return new ResponseEntity<>(payment, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<PageInfoDto> getPayments (Pageable pageable) {
        Page<Payment> page = paymentService.getPayments(pageable);

        return new ResponseEntity<>(new PageInfoDto(page), HttpStatus.OK);
    }

}
