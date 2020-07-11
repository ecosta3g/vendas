package io.github.ecosta3g;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.ecosta3g.config.MinhaConfiguration;

@SpringBootApplication
@RestController
public class ApiVendasApplication {
	
	@Autowired
	private MinhaConfiguration minhaConfiguration;
	
	@Value("${application.name}")
	private String applicationName;
	
	@GetMapping("/hello")
	public String helloWorld() {
		return "Hello World";
	}

	@GetMapping("/v1/nomeAplicacao")
	public String nomeAplicacao() {
		return minhaConfiguration.nomeAplicacao();
	}
	
	@GetMapping("/v2/nomeAplicacao")
	public String nomeAplicacaoAP() {
		return applicationName;
	}

	public static void main(String[] args) {
		SpringApplication.run(ApiVendasApplication.class, args);
	}

}
