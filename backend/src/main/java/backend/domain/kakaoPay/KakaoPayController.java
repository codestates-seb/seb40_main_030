package backend.domain.kakaoPay;

import backend.domain.payment.entity.Payment;
import backend.domain.payment.service.PaymentService;
import backend.global.security.utils.JwtExtractUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import lombok.Setter;
import lombok.extern.java.Log;
import javax.servlet.http.HttpServletRequest;

@Log
@Controller
@RequiredArgsConstructor
public class KakaoPayController {

    @Setter(onMethod_ = @Autowired)
    private KakaoPayService kakaopay;
    private final PaymentService paymentService;
    private final JwtExtractUtils jwtExtractUtils;

    @PostMapping("/kakaoPay")
    public String kakaoPay(@RequestParam(name = "itemName") String itemName,
                           @RequestParam(name = "totalAmount") int totalAmount,
                           @RequestParam(name = "batteryId") Long batteryId,
                           @RequestParam(name = "startTime") String startTime,
                           @RequestParam(name = "endTime") String endTime,
                           HttpServletRequest request) {
        log.info("kakaoPay post............................................");
        Long memberId = jwtExtractUtils.extractMemberIdFromJwt(request);
        Payment payment = new Payment(startTime, endTime, totalAmount);
        Payment payment2 = paymentService.postPayment(payment, batteryId, memberId);
        Long paymentId = payment2.getId();

        return "redirect:" + kakaopay.kakaoPayReady(itemName, totalAmount, paymentId);
    }

    @GetMapping("/kakaoPaySuccess")
    public void kakaoPaySuccess(@RequestParam("pg_token") String pg_token, Model model) {
        log.info("kakaoPaySuccess get............................................");
        log.info("kakaoPaySuccess pg_token : " + pg_token);

        model.addAttribute("info", kakaopay.kakaoPayInfo(pg_token));

    }

    // 결제 취소시 실행 url
    @PostMapping("/kakaoPayCancel")
    public void kakaoPayCancel(@RequestParam(name = "paymentId") Long paymentId,
                               @RequestParam(name = "cancel_amount") int cancel_amount,Model model) {
        model.addAttribute("info", kakaopay.kakaoPayCancel(paymentId, cancel_amount));
    }

    // 결제 실패시 실행 url
    @GetMapping("/kakaoPaySuccessFail")
    public String payFail() {
        return "redirect:/";
    }

}