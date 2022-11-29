package backend.domain.kakaoPay;

import java.net.URI;
import java.net.URISyntaxException;

import backend.domain.payment.entity.PayStatus;
import backend.domain.payment.entity.Payment;
import backend.domain.payment.repository.PaymentRepository;
import backend.domain.payment.service.PaymentService;
import backend.global.exception.dto.BusinessLogicException;
import backend.global.exception.exceptionCode.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import lombok.extern.java.Log;

@Service
@Log @RequiredArgsConstructor
public class KakaoPayService {

    private static final String HOST = "https://kapi.kakao.com";

    private KakaoPayReadyVO kakaoPayReadyVO;
    private KakaoPayApprovalVO kakaoPayApprovalVO;
    private String itemName;
    private int totalAmount;
    private Long paymentId;

    private final PaymentRepository paymentRepository;

    private final PaymentService paymentService;

    public String kakaoPayReady(String itemName, int totalAmount, Long paymentId) {
//        Payment payment2 = paymentRepository.findById(payment.getId())
//                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PAY_NOT_FOUND));
//        this.userId = payment2.getMember().getNickname();
        this.itemName = itemName;
        this.totalAmount = totalAmount;
        this.paymentId = paymentId;
        RestTemplate restTemplate = new RestTemplate();

        // 서버로 요청할 Header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "KakaoAK " + "82d314b8fd7c2c1f79dadd248f79a7b0");
        headers.add("Accept", MediaType.APPLICATION_JSON_VALUE);
        headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");

        // 서버로 요청할 Body
        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
        params.add("cid", "TC0ONETIME");
        params.add("partner_order_id", String.valueOf(paymentId));//가맹점 주문번호
        params.add("partner_user_id", "userId");//가맹점 회원 id
        params.add("item_name", itemName);//품목 이름
        params.add("quantity", "1");
        params.add("total_amount", String.valueOf(totalAmount));//상품 총 금액
        params.add("tax_free_amount", "100");
        params.add("approval_url", "http://localhost:8080/kakaoPaySuccess");// 결제 승인시 url
        params.add("cancel_url", "http://localhost:8080/kakaoPayCancel"); // 결제 취소시 urlgit pu
        params.add("fail_url", "http://localhost:8080/kakaoPaySuccessFail"); // 결제 실패시 url

        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<MultiValueMap<String, String>>(params, headers);

        try {
            kakaoPayReadyVO = restTemplate.postForObject(new URI(HOST + "/v1/payment/ready"), body, KakaoPayReadyVO.class);

            log.info("" + kakaoPayReadyVO);

            return kakaoPayReadyVO.getNext_redirect_pc_url();

        } catch (RestClientException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (URISyntaxException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return "/pay";

    }

    public KakaoPayApprovalVO kakaoPayInfo(String pg_token) {

        log.info("KakaoPayInfoVO............................................");
        log.info("-----------------------------");

        RestTemplate restTemplate = new RestTemplate();

        // 서버로 요청할 Header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "KakaoAK " + "82d314b8fd7c2c1f79dadd248f79a7b0");
        headers.add("Accept", MediaType.APPLICATION_JSON_VALUE);
        headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");

        // 서버로 요청할 Body
        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
        params.add("cid", "TC0ONETIME");
        params.add("tid", kakaoPayReadyVO.getTid());// 결제고유 번호
        params.add("partner_order_id", String.valueOf(paymentId)); //가맹점 주문번호
        params.add("partner_user_id", "userId"); //가맹점 회원 id
        params.add("pg_token", pg_token);
        params.add("total_amount", String.valueOf(totalAmount));//상품 총 금액

        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<MultiValueMap<String, String>>(params, headers);

        try {
            kakaoPayApprovalVO = restTemplate.postForObject(new URI(HOST + "/v1/payment/approve"), body, KakaoPayApprovalVO.class);
            log.info("" + kakaoPayApprovalVO);

            Payment payment = paymentRepository.findById(paymentId).get();
            payment.setStatus(PayStatus.WAITING_FOR_RESERVATION);
            paymentService.patchPayment(payment);
            // 결제 실패 로직은 catch문에?

            return kakaoPayApprovalVO;

        } catch (RestClientException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (URISyntaxException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return null;
    }
}
