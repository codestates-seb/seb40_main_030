package backend.domain.payment.service;

import backend.domain.battery.entity.Battery;
import backend.domain.battery.repository.BatteryRepository;
import backend.domain.payment.entity.Payment;
import backend.domain.payment.repository.PaymentRepository;
import backend.domain.zone.repository.ZoneRepository;
import backend.global.exception.dto.BusinessLogicException;
import backend.global.exception.exceptionCode.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Service @RequiredArgsConstructor @Transactional(readOnly = true)
public class PaymentService {

    private final PaymentRepository paymentRepository;

    private final BatteryRepository batteryRepository;

    private final ZoneRepository zoneRepository;

    @Transactional
    public Payment postPayment (Payment payment, Long batteryId) {
        Battery battery = batteryRepository.findById(batteryId)
                .orElseThrow(()-> new BusinessLogicException(ExceptionCode.BATTERY_NOT_FOUND));
        int totalPrice = battery.getPrice();  // *(endTime - startTime) 로직 추가되야함
        payment.setBattery(battery);
        payment.setTotalPrice(totalPrice);
//        payment.setZone(zoneRepository.findById(battery.getZone().getId()));

        // 결제가 불가능할 경우 예외처리 필요

        return paymentRepository.save(payment);
    }


    @Transactional
    public Payment patchPayment (Payment payment) {
        Payment savedPayment = paymentRepository.findById(payment.getId())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND));
        Optional.of(payment.getTotalPrice()).ifPresent(savedPayment::setTotalPrice);
        Optional.ofNullable(payment.getStatus()).ifPresent(savedPayment::setStatus);
        Optional.of(payment.getPayMethod()).ifPresent(savedPayment::setPayMethod);
        savedPayment.setModifiedAt(payment.getModifiedAt());

        return paymentRepository.save(savedPayment);
    }


    @Transactional
    public void deletePayment (Long paymentId) {
        Payment savedPayment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND));

        paymentRepository.delete(savedPayment);
    }


    public Payment getPayment (Long paymentId) {

        return paymentRepository.findById(paymentId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND));
    }


    public Page<Payment> getPayments (Pageable pageable) {

        return paymentRepository.findAll(pageable);
    }

}
