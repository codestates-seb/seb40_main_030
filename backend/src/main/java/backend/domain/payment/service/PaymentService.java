package backend.domain.payment.service;

import backend.domain.battery.entity.Battery;
import backend.domain.battery.repository.BatteryRepository;
import backend.domain.member.entity.Member;
import backend.domain.member.repository.MemberRepository;
import backend.domain.payment.entity.Payment;
import backend.domain.payment.repository.PaymentRepository;
import backend.domain.station.entity.Station;
import backend.domain.station.repository.StationRepository;
import backend.global.exception.dto.BusinessLogicException;
import backend.global.exception.exceptionCode.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service @RequiredArgsConstructor @Transactional(readOnly = true)
public class PaymentService {

    private final PaymentRepository paymentRepository;

    private final BatteryRepository batteryRepository;

    private final StationRepository stationRepository;

    private final MemberRepository memberRepository;

    @Transactional
    public Payment postPayment (Payment payment, Long batteryId, Long memberId) {
        Member member =memberRepository.findById(memberId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND)); // 로그인 한 계정이 존재하는지 확인

        Battery battery = batteryRepository.findById(batteryId)
                .orElseThrow(()-> new BusinessLogicException(ExceptionCode.BATTERY_NOT_FOUND)); // 예약하는 배터리가 존재하는지 확인

        Station station = stationRepository.findById(battery.getStation().getId())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.STATION_NOT_FOUND));

//        reservationRepository.find(battery.getReserve().getStartTime(), battery.getReserve().getEndTime())
//        예약하려던 배터리가 가진 Reservation테이블의 값들 중 between시간이 현재 빌리려는 시간의 Btween시간과 겹치는지 비교하기

        int totalPrice = battery.getPrice();  // *(endTime - startTime) 로직 추가되야함
        payment.setMember(member);
        payment.setBattery(battery);
        payment.setStation(station);
        payment.setTotalPrice(totalPrice);

//        결제가 불가능할 경우 예외처리 필요

        return paymentRepository.save(payment);
    }


    @Transactional
    public Payment patchPayment (Payment payment) {
        Payment savedPayment = paymentRepository.findById(payment.getId())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PAY_NOT_FOUND));
        Optional.of(payment.getTotalPrice()).ifPresent(savedPayment::setTotalPrice);
        Optional.ofNullable(payment.getStatus()).ifPresent(savedPayment::setStatus);
        Optional.of(payment.getPayMethod()).ifPresent(savedPayment::setPayMethod);
        savedPayment.setModifiedAt(payment.getModifiedAt());

        return paymentRepository.save(savedPayment);
    }


    @Transactional
    public void deletePayment (Long paymentId) {
        Payment savedPayment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PAY_NOT_FOUND));

        paymentRepository.delete(savedPayment);
    }


    public Payment getPayment (Long paymentId) {

        return paymentRepository.findById(paymentId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PAY_NOT_FOUND));
    }


    public Page<Payment> getPayments (Pageable pageable) {

        Page<Payment> page = paymentRepository.findAllByOrderByCreatedAtDesc(pageable);

        return page;
    }

}
