package backend.domain.payment.service;

import backend.domain.battery.entity.Battery;
import backend.domain.battery.entity.Reservation;
import backend.domain.battery.repository.BatteryRepository;
import backend.domain.battery.repository.ReservationRepository;
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

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Optional;

@Service @RequiredArgsConstructor @Transactional(readOnly = true)
public class PaymentService {

    private final PaymentRepository paymentRepository;
    private final BatteryRepository batteryRepository;
    private final StationRepository stationRepository;
    private final MemberRepository memberRepository;
    private final ReservationRepository reservationRepository;

    @Transactional
    public Payment postPayment (Payment payment, Long batteryId, Long memberId) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND)); // 로그인 한 계정이 존재하는지 확인

        Battery battery = batteryRepository.findById(batteryId)
                .orElseThrow(()-> new BusinessLogicException(ExceptionCode.BATTERY_NOT_FOUND)); // 예약하는 배터리가 존재하는지 확인

        Station station = stationRepository.findById(battery.getStation().getId())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.STATION_NOT_FOUND));

        // 예약 시간 가능한지 검증 로직
        LocalDateTime startT = LocalDateTime.parse(payment.getStartTime());
        LocalDateTime endT = LocalDateTime.parse(payment.getEndTime());

        for (int i = 0; i < battery.getReservations().size(); i++) {   // 배터리 예약 목록을 순회
            Reservation reservation = battery.getReservations().get(i);
            LocalDateTime reserveStart = LocalDateTime.parse(reservation.getStartTime());
            LocalDateTime reserveEnd = LocalDateTime.parse(reservation.getStartTime());
            if (startT.isBefore(reserveStart) && endT.isAfter(reserveEnd)) {
                throw new BusinessLogicException(ExceptionCode.CAN_NOT_RESERVE);
            }
            else if (startT.isAfter(reserveStart) && startT.isBefore(reserveEnd) && endT.isAfter(reserveEnd)) {
                throw new BusinessLogicException(ExceptionCode.CAN_NOT_RESERVE);
            }
            else if (startT.isBefore(reserveStart) && endT.isAfter(reserveEnd)) {
                throw new BusinessLogicException(ExceptionCode.CAN_NOT_RESERVE);
            }
            else if (startT.isAfter(reserveStart) && endT.isBefore(reserveEnd)) {
                throw new BusinessLogicException(ExceptionCode.CAN_NOT_RESERVE);
            }
        }

        // 총 금액 계산 로직
        // 1. startTime과 endTime을 분단위로 환산 (절대 시간 계산?)
        // String을 LocalDateTime으로 변환 -> 시간 비교 -> 분단위 환산  (endTime - startTime의 분단위 값)
        LocalDateTime startTime = LocalDateTime.parse(payment.getStartTime());
        LocalDateTime endTime = LocalDateTime.parse(payment.getEndTime());
        Duration diff = Duration.between(startTime, endTime);
        int diffMin = (int) diff.toMinutes();
        // 2. 총 금액 = 기본 단위 가격 * 총 대여시간(min) / 10(min)
        int totalPrice = battery.getPrice() * (diffMin / 10);

        payment.setMember(member);
        payment.setBattery(battery);
        payment.setStation(station);
        payment.setTotalPrice(totalPrice);

        return paymentRepository.save(payment);

    }


    @Transactional
    public Payment patchPayment (Payment payment, Long memberId) {
        Payment savedPayment = paymentRepository.findById(payment.getId())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PAY_NOT_FOUND));

        if (savedPayment.getMember().getId() != memberId) throw new BusinessLogicException(ExceptionCode.NON_ACCESS_MODIFY);

        Optional.of(payment.getTotalPrice()).ifPresent(savedPayment::setTotalPrice);
        Optional.ofNullable(payment.getStatus()).ifPresent(savedPayment::setStatus);
        Optional.of(payment.getPayMethod()).ifPresent(savedPayment::setPayMethod);
        savedPayment.setModifiedAt(payment.getModifiedAt());
        Reservation reservation = new Reservation();
        if(savedPayment.getStatus().getCode() == 1){
            reservation.setStartTime(savedPayment.getStartTime());
            reservation.setEndTime(savedPayment.getEndTime());
            reservation.setPayment(savedPayment);
            reservation.setBattery(savedPayment.getBattery());
            reservation.setStationId(savedPayment.getStation().getId());
            reservation.setCreatedAt(savedPayment.getCreatedAt());
            reservation.setModifiedAt(savedPayment.getModifiedAt());
            reservation.setPayStatus(savedPayment.getStatus());
            reservationRepository.save(reservation);
        }

        return paymentRepository.save(savedPayment);
    }


    @Transactional
    public void deletePayment (Long paymentId, Long memberId) {
        Payment savedPayment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PAY_NOT_FOUND));

        if (savedPayment.getMember().getId() != memberId) throw new BusinessLogicException(ExceptionCode.NON_ACCESS_MODIFY);

        paymentRepository.delete(savedPayment);
    }


    public Payment getPayment (Long paymentId, Long memberId) {
        Payment savedPayment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PAY_NOT_FOUND));
        if (savedPayment.getMember().getId() != memberId) throw new BusinessLogicException(ExceptionCode.NON_ACCESS_MODIFY);

        return savedPayment;
    }


    public Page<Payment> getPayments (Pageable pageable) {

        return paymentRepository.findAllByOrderByCreatedAtDesc(pageable);
    }

}
