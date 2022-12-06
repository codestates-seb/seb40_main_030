package backend.domain.kakaoPay;

import backend.domain.battery.repository.ReservationRepository;
import backend.domain.payment.entity.PayStatus;
import backend.domain.payment.entity.Payment;
import backend.domain.payment.repository.PaymentRepository;
import backend.domain.payment.service.PaymentService;
import backend.global.exception.dto.BusinessLogicException;
import backend.global.exception.exceptionCode.ExceptionCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@Service
@Log
@RequiredArgsConstructor
public class KakaoPayService {

    private static final String HOST = "https://kapi.kakao.com";
    private final PaymentRepository paymentRepository;
    private final PaymentService paymentService;
    private final ReservationRepository reservationRepository;

    public KakaoPayReadyVO kakaoPayReady(String itemName, int totalAmount, Long paymentId) {

        RestTemplate restTemplate = new RestTemplate();

        // 서버로 요청할 Header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "KakaoAK " + "a017f24b1214df0ab9613301ebda4c5d");
        headers.add("Accept", MediaType.APPLICATION_JSON_VALUE);
        headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");

        // 서버로 요청할 Body
        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
        params.add("cid", "TC0ONETIME");
        params.add("partner_order_id", Long.toString(paymentId));//가맹점 주문번호
        params.add("partner_user_id", "userId");//가맹점 회원 id
        params.add("item_name", itemName);//품목 이름
        params.add("quantity", "1");
        params.add("total_amount", String.valueOf(totalAmount));//상품 총 금액
        params.add("tax_free_amount", "100");
        params.add("approval_url", "http://battery-bucket-deploy.s3-website.ap-northeast-2.amazonaws.com/kakaoPaySuccess/" + paymentId);// 결제 승인시 url
        params.add("cancel_url", "http://battery-bucket-deploy.s3-website.ap-northeast-2.amazonaws.com/kakaoPayCancel/" + paymentId); // 결제 취소시 url
        params.add("fail_url", "http://battery-bucket-deploy.s3-website.ap-northeast-2.amazonaws.com/kakaoPaySuccessFail/" + paymentId); // 결제 실패시 url

        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<>(params, headers);

        String url = "https://kapi.kakao.com/v1/payment/ready";
        KakaoPayReadyVO kakaoPayReadyVO = restTemplate.postForObject(url, body, KakaoPayReadyVO.class);

        Payment payment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PAY_NOT_FOUND));
        kakaoPayReadyVO.setPartner_order_id(Long.toString(paymentId));
        payment.setTid(kakaoPayReadyVO.getTid());
        paymentRepository.save(payment);

        log.info("" + kakaoPayReadyVO);

//            return kakaoPayReadyVO.getNext_redirect_pc_url();
        return kakaoPayReadyVO;
    }


    public KakaoPayApprovalVO kakaoPayInfo(Long paymentId, String pg_token) {
        Payment payment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PAY_NOT_FOUND));
        log.info("KakaoPayInfoVO............................................");
        log.info("partner_order_id:" + paymentId);
        log.info("Tid:" + payment.getTid());

        RestTemplate restTemplate = new RestTemplate();

        // 서버로 요청할 Header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "KakaoAK " + "a017f24b1214df0ab9613301ebda4c5d");
        headers.add("Accept", MediaType.APPLICATION_JSON_VALUE);
        headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");

        // 서버로 요청할 Body
        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
        params.add("cid", "TC0ONETIME");
        params.add("tid", payment.getTid());// 결제고유 번호
        params.add("partner_order_id", String.valueOf(paymentId)); //가맹점 주문번호
        params.add("partner_user_id", "userId"); //가맹점 회원 id
        params.add("pg_token", pg_token);

        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<MultiValueMap<String, String>>(params, headers);

        String url = "https://kapi.kakao.com/v1/payment/approve";

        KakaoPayApprovalVO kakaoPayApprovalVO = restTemplate.postForObject(url, body, KakaoPayApprovalVO.class);

        log.info("결재 승인 response 객체" + kakaoPayApprovalVO);

//            Long paymentId = Long.parseLong(kakaoPayReadyVO.getPartner_order_id());
        payment.setStatus(PayStatus.WAITING_FOR_RESERVATION);

        payment.setPayMethod(kakaoPayApprovalVO.getCard_info().getPurchase_corp());

        paymentService.patchPayment(payment);

        paymentRepository.save(payment);

        return kakaoPayApprovalVO;

    }

//    public void kakaoPayCancelOrFail(Long paymentId){
//        RestTemplate restTemplate = new RestTemplate();
//        KakaoPayCancelVO kakaoPayCancelVO;
//        Payment savedPayment = paymentRepository.findById(paymentId)
//                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PAY_NOT_FOUND));
//        String tid = savedPayment.getTid();
//
//        // 서버로 요청할 Header
//        HttpHeaders headers = new HttpHeaders();
//        headers.add("Authorization", "KakaoAK " + "82d314b8fd7c2c1f79dadd248f79a7b0");
//        headers.add("Accept", MediaType.APPLICATION_JSON_VALUE);
//        headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");
//
//        // 서버로 요청할 Body
//        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
//        params.add("cid", "TC0ONETIME");
//        params.add("tid", tid);// 결제고유 번호
//        params.add("cancel_amount", String.valueOf(savedPayment.getTotalPrice()));//취소 상품 총 금액
//        params.add("cancel_tax_free_amount", "100");
//
//        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<MultiValueMap<String, String>>(params, headers);
//
////        kakaoPayCancelVO = restTemplate.postForObject(new URI(HOST + "/v1/payment/cancel"), body, KakaoPayCancelVO.class);
//
////        log.info("" + kakaoPayCancelVO);
//
//        savedPayment.setStatus(PayStatus.CANCELED);
//
//        paymentRepository.save(savedPayment);
//
//        reservationRepository.deleteById(savedPayment.getReservations().get(0).getReservationId());
//
////        return kakaoPayCancelVO;
//    }

    public KakaoPayCancelVO kakaoPayCancel(Long paymentId){
        RestTemplate restTemplate = new RestTemplate();
        KakaoPayCancelVO kakaoPayCancelVO;
        Payment savedPayment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PAY_NOT_FOUND));
        String tid = savedPayment.getTid();

        // 서버로 요청할 Header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "KakaoAK " + "a017f24b1214df0ab9613301ebda4c5d");
        headers.add("Accept", MediaType.APPLICATION_JSON_VALUE);
        headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");

        // 서버로 요청할 Body
        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
        params.add("cid", "TC0ONETIME");
        params.add("tid", tid);// 결제고유 번호
        params.add("cancel_amount", String.valueOf(savedPayment.getTotalPrice()));//취소 상품 총 금액
        params.add("cancel_tax_free_amount", "100");

        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<MultiValueMap<String, String>>(params, headers);
        try {
            kakaoPayCancelVO = restTemplate.postForObject(new URI(HOST + "/v1/payment/cancel"), body, KakaoPayCancelVO.class);

            log.info("" + kakaoPayCancelVO);

            savedPayment.setStatus(PayStatus.CANCELED);
            paymentRepository.save(savedPayment);
            reservationRepository.deleteById(savedPayment.getReservations().get(0).getReservationId());

            return kakaoPayCancelVO;

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