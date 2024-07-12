package net.amal.projectdemospringang.services;

import net.amal.projectdemospringang.dtos.PaymentDTO;
import net.amal.projectdemospringang.entities.Payment;
import net.amal.projectdemospringang.entities.PaymentStatus;
import net.amal.projectdemospringang.entities.PaymentType;
import net.amal.projectdemospringang.entities.Student;
import net.amal.projectdemospringang.repository.PaymentRepository;
import net.amal.projectdemospringang.repository.StudentRepository;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.UUID;
@Service
@Transactional
public class PaymentService {

private StudentRepository studentRepository;
private PaymentRepository paymentRepository;

    public PaymentService(StudentRepository studentRepository, PaymentRepository paymentRepository) {
        this.studentRepository = studentRepository;
        this.paymentRepository = paymentRepository;
    }

    public Payment savePayment(MultipartFile file, PaymentDTO paymentDTO) throws IOException {
        Path folderPath = Paths.get(System.getProperty("user.home"), "enset-data", "payments");
        if (!Files.exists(folderPath)) {
            Files.createDirectories(folderPath);
        }
        String fileName = UUID.randomUUID().toString();
        Path filePath = Paths.get(System.getProperty("user.home"), "enset-data", "payments", fileName + ".pdf");
        Files.copy(file.getInputStream(), filePath);
        Student student = studentRepository.findByCode(paymentDTO.getStudentCode());
        Payment payment =Payment.builder()
                .date(paymentDTO.getDate())
                .type(paymentDTO.getType())
                .status(PaymentStatus.CREATED)
                .student(student)
                .amount(paymentDTO.getAmount())
                .file(filePath.toUri().toString())

                .build();
        return paymentRepository.save(payment);
    }
    public Payment updatePaymentStatus( PaymentStatus status, Long id){
        Payment payment=paymentRepository.findById(id).get();
        payment.setStatus(status);
        return paymentRepository.save(payment);
    }

    public byte[] getPaymentFile(Long paymentId) throws IOException {
        Payment payment = paymentRepository.findById(paymentId).get();
        return Files.readAllBytes (Path.of(URI.create(payment.getFile())));
    }
}
