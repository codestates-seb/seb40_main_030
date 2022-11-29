package backend.domain.kakaoPay;

import backend.domain.payment.dto.PayPostReqDto;
import backend.domain.payment.entity.Payment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import lombok.Setter;
import lombok.extern.java.Log;

@Log
@Controller
public class KakaoPayController {

    @Setter(onMethod_ = @Autowired)
    private KakaoPayService kakaopay;


    @GetMapping("/kakaoPay")
    public void kakaoPayGet() {

    }

    @PostMapping("/kakaoPay")
    public String kakaoPay(@RequestParam(name = "itemName") String itemName,
                           @RequestParam(name = "total_amount") int totalAmount,
                           @RequestParam(name = "paymentId") Long paymentId) {
        log.info("kakaoPay post............................................");

        return "redirect:" + kakaopay.kakaoPayReady(itemName, totalAmount, paymentId);

    }

    @GetMapping("/kakaoPaySuccess")
    public void kakaoPaySuccess(@RequestParam("pg_token") String pg_token, Model model) {
        log.info("kakaoPaySuccess get............................................");
        log.info("kakaoPaySuccess pg_token : " + pg_token);

        model.addAttribute("info", kakaopay.kakaoPayInfo(pg_token));
    }
}