package net.amal.projectdemospringang.repository;

import net.amal.projectdemospringang.entities.Payment;
import net.amal.projectdemospringang.entities.PaymentStatus;
import net.amal.projectdemospringang.entities.PaymentType;
import net.amal.projectdemospringang.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment,Long> {
    List<Payment> findByStudentCode(String code);
    List<Payment> findByStatus(PaymentStatus status);
    List<Payment> findByType(PaymentType type);

}
