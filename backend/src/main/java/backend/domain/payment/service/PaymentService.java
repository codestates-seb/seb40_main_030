package backend.domain.payment.service;

import backend.domain.payment.entity.Payment;
import backend.domain.payment.repository.PaymentRepository;
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


    @Transactional
    public Payment postPayment (Payment payment) {

        return paymentRepository.save(payment);
    }


    @Transactional
    public Payment patchPayment (Payment payment) {
        Payment savedPayment = paymentRepository.findById(payment.getId())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND));
        Optional.ofNullable(payment.getTotalPrice()).ifPresent(savedPayment::setTotalPrice);
        Optional.ofNullable(payment.getTotalBatteries()).ifPresent(savedPayment::setTotalBatteries);
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
