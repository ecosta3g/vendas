package io.github.ecosta3g;

import org.aspectj.weaver.patterns.ArgsAnnotationPointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.ecosta3g.model.entity.Cliente;
import io.github.ecosta3g.model.repository.ClienteRepository;

@SpringBootApplication
public class ApiVendasApplication {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@Bean
	public CommandLineRunner run() {
		return args -> {
			Cliente cliente = Cliente.builder().cpf("06156291482").nome("Eduardo Costa").build();
			clienteRepository.save(cliente);
		};
	}
	
	public static void main(String[] args) {
		SpringApplication.run(ApiVendasApplication.class, args);
	}

}
