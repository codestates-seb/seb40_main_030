package backend.domain.kakaoPay;

import backend.domain.payment.entity.Payment;
import backend.domain.payment.service.PaymentService;
import backend.global.security.utils.JwtExtractUtils;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import java.net.URI;
import java.net.URISyntaxException;


@Log
@RestController
@RequiredArgsConstructor
@RequestMapping
public class KakaoPayController {

    private final PaymentService paymentService;
    private final JwtExtractUtils jwtExtractUtils;
    @Setter(onMethod_ = @Autowired)
    private KakaoPayService kakaopay;

    @GetMapping("/kakaoPay")
    public ResponseEntity kakaoPay(@RequestParam(required = false, name = "itemName") String itemName,
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
    public ResponseEntity kakaoPaySuccess(@RequestParam(required = false) String pg_token,
                                          @PathVariable("paymentId") Long paymentId, RedirectAttributes redirectAttributes) throws URISyntaxException {
        log.info("kakaoPaySuccess get............................................");
        log.info("kakaoPaySuccess pg_token : " + pg_token);

        kakaopay.kakaoPayInfo(paymentId, pg_token);
        redirectAttributes.addAttribute("paymentId", paymentId);
        URI redirectUri = new URI("http://battery-bucket-deploy.s3-website.ap-northeast-2.amazonaws.com/payments/payment_completed");
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setLocation(redirectUri);

        return new ResponseEntity<>(httpHeaders, HttpStatus.MOVED_PERMANENTLY);
//        return "redirect:";
    }

    // 결제 취소시 실행 url
    @PostMapping("/kakaoPayCancel")
    public void kakaoPayCancel(@RequestParam(name = "paymentId") Long paymentId,
                               Model model) {
        model.addAttribute("info", kakaopay.kakaoPayCancel(paymentId));
    }

    // 결제 취소시 실행 url
//    @GetMapping("/kakaoPayCancel/{paymentId}")
//    public String kakaoPayCancel(@PathVariable("paymentId") Long paymentId) {
//
//        kakaopay.kakaoPayCancelOrFail(paymentId);
//        log.info("결제가 취소되었습니다.");
//        return "redirect:http://battery-bucket-deploy.s3-website.ap-northeast-2.amazonaws.com/kakaoPayCancel";
//    }

    // 결제 실패시 실행 url
//    @GetMapping("/kakaoPaySuccessFail/{paymentId}")
//    public String kakaoPaySuccessFail(@PathVariable("paymentId") Long paymentId) {
//
//        kakaopay.kakaoPayCancelOrFail(paymentId);
//        log.info("결제가 실패되었습니다.");
//        return "redirect:http://battery-bucket-deploy.s3-website.ap-northeast-2.amazonaws.com/kakaoPaySuccessFail";
//    }
}
