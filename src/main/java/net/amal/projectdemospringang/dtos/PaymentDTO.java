package net.amal.projectdemospringang.dtos;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import net.amal.projectdemospringang.entities.PaymentStatus;
import net.amal.projectdemospringang.entities.PaymentType;
import net.amal.projectdemospringang.entities.Student;

import java.time.LocalDate;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PaymentDTO {

        private double amount;
        private PaymentType type;
        private LocalDate date;
        private String studentCode;
    }