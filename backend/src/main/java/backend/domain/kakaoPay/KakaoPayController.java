package backend.domain.kakaoPay;

import backend.domain.payment.entity.Payment;
import backend.domain.payment.service.PaymentService;
import backend.global.security.utils.JwtExtractUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import lombok.Setter;
import lombok.extern.java.Log;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;

@Log
@Controller
@RequiredArgsConstructor
public class KakaoPayController {

    @Setter(onMethod_ = @Autowired)
    private KakaoPayService kakaopay;
    private final PaymentService paymentService;
    private final JwtExtractUtils jwtExtractUtils;

    @GetMapping("/kakaoPay")
    public @ResponseBody ResponseEntity kakaoPay(@RequestParam(required = false, name = "itemName") String itemName,
                                                 @RequestParam(required = false, name = "totalAmount") int totalAmount,
                                                 @RequestParam(required = false, name = "batteryId") Long batteryId,
                                                 @RequestParam(required = false, name = "startTime") String startTime,
                                                 @RequestParam(required = false, name = "endTime") String endTime,
                                                 HttpServletRequest request) {
        log.info("kakaoPay post............................................");
        Long memberId = jwtExtractUtils.extractMemberIdFromJwt(request);
        Payment payment = new Payment(startTime, endTime, totalAmount);
        Payment savedPayment = paymentService.postPayment(payment, batteryId, memberId);
        Long paymentId = savedPayment.getId();
        KakaoPayReadyVO response = kakaopay.kakaoPayReady(itemName, totalAmount, paymentId);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }


    @GetMapping("/kakaoPaySuccess/{paymentId}")
    public String kakaoPaySuccess(@RequestParam("pg_token") String pg_token,
                                  @PathVariable("paymentId") Long paymentId, RedirectAttributes redirectAttributes) {
        log.info("kakaoPaySuccess get............................................");
        log.info("kakaoPaySuccess pg_token : " + pg_token);

        kakaopay.kakaoPayInfo(paymentId, pg_token);
        redirectAttributes.addAttribute("paymentId", paymentId);

        return "redirect:http://localhost:8080/kakaoPaySuccess";
    }

    // 결제 취소시 실행 url
    @GetMapping("/kakaoPayCancel/{paymentId}")
    public String kakaoPayCancel(@PathVariable("paymentId") Long paymentId) {

        kakaopay.kakaoPayCancelOrFail(paymentId);
        return "redict:http://localhost:8080/kakaoPayCancel";
    }

    // 결제 실패시 실행 url
    @PostMapping("/kakaoPaySuccessFail/{paymentId}")
    public String kakaoPaySuccessFail(@PathVariable("paymentId") Long paymentId) {

        kakaopay.kakaoPayCancelOrFail(paymentId);
        return "redict:http://localhost:8080/kakaoPaySuccessFail";
    }
}