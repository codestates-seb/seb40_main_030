package backend.domain.payment.controller;

import backend.domain.payment.dto.*;
import backend.domain.payment.entity.Payment;
import backend.domain.payment.service.PaymentService;
import backend.global.dto.PageInfoDto;
import backend.global.dto.SingleResDto;
import backend.global.security.utils.JwtExtractUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.List;

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
        Payment modifiedPayment = paymentService.patchPayment(payment);
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

    // 마이페이지 조회 시 payment 상태 값 새로고침
    @GetMapping
    public ResponseEntity<PageInfoDto> getPayments(Pageable pageable, HttpServletRequest request) {
        Long memberId = jwtExtractUtils.extractMemberIdFromJwt(request);
        List<Payment> list = paymentService.getPayments(pageable, memberId);
        Page<Payment> page = new PageImpl<>(list, pageable, list.size());
        Page<PayResDto> dtoPage = page.map(PayResDto::new);

        return new ResponseEntity<>(new PageInfoDto(dtoPage), HttpStatus.OK);
    }
    // 최대 연장가능 시간 조회
    @GetMapping("/{paymentId}/extend")
    public ResponseEntity<NearReservationDto> getNearReservation(HttpServletRequest request,
                                                                 @PathVariable Long paymentId){
        Long memberId = jwtExtractUtils.extractMemberIdFromJwt(request);
        String possibleExtendTime = paymentService.getNearReservation(paymentId, memberId);

        return new ResponseEntity<>(new NearReservationDto(possibleExtendTime), HttpStatus.OK);
    }

    // 지정한 시간으로 반납연장하기
    @PatchMapping("/{paymentId}/extend")
    public ResponseEntity<ExtendTimeDto> extendEndTime(HttpServletRequest request,
                                                       @PathVariable Long paymentId,
                                                       @RequestParam String extendTime) {
        Long memberId = jwtExtractUtils.extractMemberIdFromJwt(request);

        Payment modifiedPayment = paymentService.extendEndTime(paymentId, extendTime);
        ExtendTimeDto response = new ExtendTimeDto(modifiedPayment);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PatchMapping("/return/{paymentId}")
    public ResponseEntity<SingleResDto<String>> returnBatteryPayment (HttpServletRequest request,
                                                                      @PathVariable Long paymentId) {
        Long memberId = jwtExtractUtils.extractMemberIdFromJwt(request);
        paymentService.returnBatteryPayment(paymentId, memberId);

        return new ResponseEntity<>(new SingleResDto<>("Success Returned"), HttpStatus.OK);
    }


    // 더미 API : 강제 결제 상태 변환
    @PatchMapping("/change/{paymentId}")
    public ResponseEntity<SingleResDto<String>> changePaymentStatus(@PathVariable Long paymentId,
                                                                    @RequestParam String status) {
        String changedStatus = paymentService.changePaymentStatus(paymentId, status);

        return new ResponseEntity<>(new SingleResDto<>("Now "+ changedStatus), HttpStatus.OK);
    }


}
