package backend.domain.payment.service;

import backend.domain.battery.entity.Battery;
import backend.domain.battery.entity.Reservation;
import backend.domain.battery.repository.BatteryRepository;
import backend.domain.battery.repository.ReservationRepository;
import backend.domain.member.entity.Member;
import backend.domain.member.repository.MemberRepository;
import backend.domain.payment.entity.PayStatus;
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

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PaymentService {

    private final PaymentRepository paymentRepository;
    private final BatteryRepository batteryRepository;
    private final StationRepository stationRepository;
    private final MemberRepository memberRepository;
    private final ReservationRepository reservationRepository;

    @Transactional
    public Payment postPayment(Payment payment, Long batteryId, Long memberId) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND)); // 로그인 한 계정이 존재하는지 확인
        Battery battery = batteryRepository.findById(batteryId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.BATTERY_NOT_FOUND)); // 예약하는 배터리가 존재하는지 확인
        Station station = stationRepository.findById(battery.getStation().getId())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.STATION_NOT_FOUND)); // 해당 스테이션이 실존하는지 확인
        payment.setMember(member);
        payment.setBattery(battery);
        payment.setStation(station);

        // 예약 시간 가능한지 검증 로직
        LocalDateTime startT = LocalDateTime.parse(payment.getStartTime());
        LocalDateTime endT = LocalDateTime.parse(payment.getEndTime());

        // 요청한 시작시간이 현재시간보다 이전일 경우 예외처리
        if (startT.isBefore(LocalDateTime.now())) throw new BusinessLogicException(ExceptionCode.CAN_NOT_RESERVE);

        // 현재 예약하려는 Payment의 시간과 겹치는 예약이 있는지 확인하는 로직
        List<Payment> list = paymentRepository.findWithAllByBatteryId(batteryId);
        for (int i = 0; i < list.size(); i++) {
            Payment tempPayment = list.get(i);
            LocalDateTime reserveStart = LocalDateTime.parse(tempPayment.getStartTime());
            LocalDateTime reserveEnd = LocalDateTime.parse(tempPayment.getStartTime());
            if (startT.isBefore(reserveStart) && endT.isAfter(reserveEnd)) {
                throw new BusinessLogicException(ExceptionCode.CAN_NOT_RESERVE);
            } else if (startT.isAfter(reserveStart) && startT.isBefore(reserveEnd) && endT.isAfter(reserveEnd)) {
                throw new BusinessLogicException(ExceptionCode.CAN_NOT_RESERVE);
            } else if (startT.isBefore(reserveStart) && endT.isAfter(reserveEnd)) {
                throw new BusinessLogicException(ExceptionCode.CAN_NOT_RESERVE);
            } else if (startT.isAfter(reserveStart) && endT.isBefore(reserveEnd)) {
                throw new BusinessLogicException(ExceptionCode.CAN_NOT_RESERVE);
            }
        }
        payment.setReturnTime(payment.getEndTime());

        return paymentRepository.save(payment);

    }


    @Transactional
    public Payment patchPayment(Payment payment) {
        Payment savedPayment = paymentRepository.findById(payment.getId())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PAY_NOT_FOUND));

        savedPayment.setModifiedAt(payment.getModifiedAt());
        if (savedPayment.getStatus().getCode() == 1) {
            Reservation reservation = new Reservation();
            reservation.setStartTime(savedPayment.getStartTime());
            reservation.setEndTime((LocalDateTime.parse(savedPayment.getEndTime()).plusHours(1)).toString());
            reservation.setPayment(savedPayment);
            reservation.setBattery(savedPayment.getBattery());
            reservation.setStationId(savedPayment.getStation().getId());
            reservation.setCreatedAt(savedPayment.getCreatedAt());
            reservation.setModifiedAt(savedPayment.getModifiedAt());
            reservation.setPayStatus(savedPayment.getStatus());
            reservationRepository.save(reservation);
        } else if (savedPayment.getStatus().getCode() == 5) {
            reservationRepository.deleteById(savedPayment.getReservations().get(0).getReservationId());
        }

        return paymentRepository.save(savedPayment);
    }


    @Transactional
    public void deletePayment(Long paymentId, Long memberId) {
        Payment savedPayment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PAY_NOT_FOUND));

        if (savedPayment.getMember().getId() != memberId)
            throw new BusinessLogicException(ExceptionCode.NON_ACCESS_MODIFY);

        paymentRepository.delete(savedPayment);
    }


    @Transactional
    public Payment getPayment(Long paymentId, Long memberId) {
        Payment savedPayment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PAY_NOT_FOUND));
        if (LocalDateTime.parse(savedPayment.getStartTime()).isBefore(LocalDateTime.now())
                && LocalDateTime.parse(savedPayment.getReturnTime()).isAfter(LocalDateTime.now())) {
            savedPayment.setStatus(PayStatus.USE_NOW);

        } else if (LocalDateTime.parse(savedPayment.getReturnTime()).isBefore(LocalDateTime.now())) {
            savedPayment.setStatus(PayStatus.HISTORY);
            reservationRepository.deleteById(savedPayment.getReservations().get(0).getReservationId());
        }
        if (savedPayment.getMember().getId() != memberId)
            throw new BusinessLogicException(ExceptionCode.NON_ACCESS_MODIFY);

        return savedPayment;
    }


    // 마이페이지 조회 시 payment 상태 값 새로고침
    @Transactional
    public List<Payment> getPayments(Pageable pageable, Long memberId) {
        Page<Payment> page = paymentRepository.findAllByOrderByCreatedAtDesc(pageable);
        List<Payment> list = page.stream().filter(pay -> (pay.getMember().getId() == memberId)).collect(Collectors.toList());

        // payment가 없을 경우의 엣지 케이스
        if(list.size()==0) return list;

        for (int i = 0; i < list.size(); i++) {
            Payment savedPayment = paymentRepository.findById(list.get(i).getId()).get(); // 위에서 애당초 payment가 없는 경우를 제외시킴 (불필요한 연산 및 엣지케이스 제거)
            if(savedPayment.getReturnTime() != null
                    && LocalDateTime.parse(savedPayment.getReturnTime()).isBefore(LocalDateTime.now())){ // 반납한 경우 제외
                continue;
            }
            else if (LocalDateTime.parse(savedPayment.getStartTime()).isBefore(LocalDateTime.now())
                    && LocalDateTime.parse(savedPayment.getReturnTime()).isAfter(LocalDateTime.now())) {
                savedPayment.setStatus(PayStatus.USE_NOW);
                paymentRepository.save(savedPayment);

            } else if (LocalDateTime.parse(savedPayment.getReturnTime()).isBefore(LocalDateTime.now())
                    && (savedPayment.getStatus() != PayStatus.HISTORY)) {  // 이미 History로 바뀐 부분은 reservation이 없기때문에 OutOfIndex 발생했었음!
                savedPayment.setStatus(PayStatus.HISTORY);
                Reservation reservation = savedPayment.getReservations().get(0);
                reservationRepository.deleteById(reservation.getReservationId());
                paymentRepository.save(savedPayment);
            }
        }

        return list;
    }


    // 최대 연장가능 시각 찾기
    @Transactional
    public String getNearReservation(Long paymentId, Long memberId) {
        String endTime = paymentRepository.findById(paymentId).get().getReturnTime();
        Long batteryId = paymentRepository.findById(paymentId).get().getBattery().getBatteryId();
        List<Reservation> list = reservationRepository.findWithAllByBatteryId(batteryId);

        LocalDateTime nearStartTime = LocalDateTime.of(2222, 01, 01, 00, 00);
        for (int i = 0; i < list.size(); i++) {
            if (paymentId != list.get(i).getPayment().getId()) {
                LocalDateTime tempStartTime = LocalDateTime.parse(list.get(i).getStartTime());
                if (tempStartTime.isBefore(nearStartTime)) {
                    nearStartTime = tempStartTime;
                }
            }
        }
        String possibleExtendTime; // 한계 시간 ,니 여기까지밖에 예약할 수 있어
        if (LocalDateTime.parse(endTime).plusHours(24).isBefore(nearStartTime)) {
            possibleExtendTime = LocalDateTime.parse(endTime).plusHours(24).toString();
        } else if (LocalDateTime.parse(endTime).plusMinutes(30).isAfter(nearStartTime)) {
            throw new BusinessLogicException(ExceptionCode.NOT_EXTEND_TIME);
        } else {
            possibleExtendTime = (nearStartTime.minusMinutes(30)).toString(); // 제일 가까운 reservation의 startTiem에서 30분 뺌
        }
        return possibleExtendTime;
    }

    // 반납 시간 연장하기
    @Transactional
    public Payment extendEndTime(Long paymentId, String extendTime) {
        Payment savedPayment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PAY_NOT_FOUND));
        Reservation reservation = reservationRepository.findById(savedPayment.getReservations().get(0).getReservationId())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND));
        reservation.setEndTime(extendTime);
        savedPayment.setReturnTime(extendTime); //실제 반납 시간
        reservationRepository.save(reservation);

        return paymentRepository.save(savedPayment);
    }


    @Transactional
    public void returnBatteryPayment(Long paymentId, Long memberId) {
        memberRepository.findById(memberId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NON_ACCESS_AUTH));
        Payment savedPayment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PAY_NOT_FOUND));
        Reservation reservation = reservationRepository.findById(savedPayment.getReservations().get(0).getReservationId())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND));

        // 반납시간 삽입
        String returnTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"));
        savedPayment.setReturnTime(returnTime);

        // 상태변경
        savedPayment.setStatus(PayStatus.HISTORY);

        // 예약 테이블 삭제
        Reservation deleteReservation = savedPayment.getReservations().get(0);
        reservationRepository.deleteById(deleteReservation.getReservationId());

        // Reservation 테이블 삭제
//        reservationRepository.delete(reservation);

        paymentRepository.save(savedPayment);
    }


    // 더미 API : 강제 결제 상태 변환
    @Transactional
    public String changePaymentStatus(Long paymentId, String status) {
        Payment payment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PAY_NOT_FOUND));

        payment.setStatus(PayStatus.valueOf(status));
        String changedStatus = payment.getStatus().toString();
        paymentRepository.save(payment);

        if(status.equals("IN_PROGRESS") || status.equals("WAITING_FOR_RESERVATION") || status.equals("USE_NOW")) {
            Reservation reservation = new Reservation();
            Member member = memberRepository.findById(1L).get();
            payment.setMember(member);
            reservation.setPayment(payment);
            reservation.setStationId(2L);
            reservation.setStartTime(LocalDateTime.now().plusDays(1).format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")));
            reservation.setEndTime(LocalDateTime.now().plusDays(2).format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")));
            reservation.setModifiedAt(LocalDateTime.now());
            reservationRepository.save(reservation);
        }
        return  changedStatus;
    }


}
