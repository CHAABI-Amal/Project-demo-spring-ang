package net.amal.projectdemospringang;

import net.amal.projectdemospringang.entities.Payment;
import net.amal.projectdemospringang.entities.PaymentStatus;
import net.amal.projectdemospringang.entities.PaymentType;
import net.amal.projectdemospringang.entities.Student;
import net.amal.projectdemospringang.repository.PaymentRepository;
import net.amal.projectdemospringang.repository.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Random;
import java.util.UUID;

@SpringBootApplication
public class ProjectDemoSpringAngApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectDemoSpringAngApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(StudentRepository studentRepository,
										PaymentRepository paymentRepository) {
		return args -> {
			studentRepository.save(Student.builder().id(UUID.randomUUID().toString())
					.firstName("Amal").code("1").programId("ILISI")
					.build());
			studentRepository.save(Student.builder().id(UUID.randomUUID().toString())
					.firstName("Inass").code("12").programId("small")
					.build());
			studentRepository.save(Student.builder().id(UUID.randomUUID().toString())
					.firstName("Noha").code("123").programId("secondary")
					.build());
			studentRepository.save(Student.builder().id(UUID.randomUUID().toString())
					.firstName("Ahmed").code("1234").programId("Primary")
					.build());


			PaymentType[] paymentTypes=PaymentType.values();
			Random random=new Random();
			studentRepository.findAll().forEach(st->{
				for(int i=0;i<10;i++){
					int index=random.nextInt(paymentTypes.length);
					Payment payment= Payment.builder()
							.amount(1000+(int)(Math.random()*20000))
							.type(paymentTypes[index])
							.status(PaymentStatus.CREATED)
							.date(LocalDate.now())
							.student(st)
							.build();
					paymentRepository.save(payment);
				}
			});
		};
	}

}
