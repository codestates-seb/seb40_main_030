package backend.domain.payment.controller;

import backend.domain.payment.dto.PayBillsResDto;
import backend.domain.payment.dto.PayPatchReqDto;
import backend.domain.payment.dto.PayPostReqDto;
import backend.domain.payment.dto.PayResDto;
import backend.domain.payment.entity.Payment;
import backend.domain.payment.service.PaymentService;
import backend.global.dto.PageInfoDto;
import backend.global.dto.SingleResDto;
import backend.global.security.utils.JwtExtractUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@RequiredArgsConstructor
@Validated
@RestController
@RequestMapping("/payments")
public class PaymentController {

    private final PaymentService paymentService;
    private final JwtExtractUtils jwtExtractUtils;

    @PostMapping
    public ResponseEntity<PayResDto> postPayment(HttpServletRequest request,
                                                 @Valid @RequestBody PayPostReqDto payPostReqDto) {

        Long memberId = jwtExtractUtils.extractMemberIdFromJwt(request);
        Payment payment = payPostReqDto.toPayment();
        Payment savedPayment = paymentService.postPayment(payment, payPostReqDto.getBatteryId(), memberId);
        PayResDto response = new PayResDto(savedPayment);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }


    @PatchMapping("/{paymentId}")
    public ResponseEntity<PayResDto> patchPayment(HttpServletRequest request,
                                                  @PathVariable Long paymentId,
                                                  @RequestBody PayPatchReqDto payPatchReqDto) {
        Long memberId = jwtExtractUtils.extractMemberIdFromJwt(request);
        Payment payment = payPatchReqDto.toPayment();
        payment.setId(paymentId);
        Payment modifiedPayment = paymentService.patchPayment(payment, memberId);
        PayResDto response = new PayResDto(modifiedPayment);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }


    @DeleteMapping("/{paymentId}")
    public ResponseEntity<SingleResDto<String>> deletePayment(HttpServletRequest request,
                                                              @PathVariable Long paymentId) {
        Long memberId = jwtExtractUtils.extractMemberIdFromJwt(request);
        paymentService.deletePayment(paymentId, memberId);

        return new ResponseEntity<>(new SingleResDto<>("Success Delete"), HttpStatus.OK);
    }


    @GetMapping("/{paymentId}")
    public ResponseEntity<PayBillsResDto> getPayment(HttpServletRequest request,
                                                     @PathVariable Long paymentId) {
        Long memberId = jwtExtractUtils.extractMemberIdFromJwt(request);
        Payment payment = paymentService.getPayment(paymentId, memberId);

        return new ResponseEntity<>(new PayBillsResDto(payment), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<PageInfoDto> getPayments(Pageable pageable) {
        Page<Payment> page = paymentService.getPayments(pageable);
        Page<PayResDto> dtoPage = page.map(PayResDto::new);

        return new ResponseEntity<>(new PageInfoDto(dtoPage), HttpStatus.OK);
    }

}
