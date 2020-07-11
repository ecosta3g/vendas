package io.github.ecosta3g;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MinhaConfiguration {
	
	@Bean
	public String nomeAplicacao() {
		return "API do Sistema de Vendas";
	}

}
