package net.amal.projectdemospringang.dtos;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import net.amal.projectdemospringang.entities.PaymentStatus;
import net.amal.projectdemospringang.entities.PaymentType;
import net.amal.projectdemospringang.entities.Student;

import java.time.LocalDate;

public class PaymentDTO {
        private Long id;
        private LocalDate date;
        private double amount;
        private PaymentType type;
        private PaymentStatus status;
    }