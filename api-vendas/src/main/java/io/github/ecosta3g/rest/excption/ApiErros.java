package io.github.ecosta3g.rest.excption;

import java.util.Arrays;
import java.util.List;

import lombok.Getter;

public class ApiErros {
	
	@Getter
	public List<String> errors;
	
	public ApiErros( List<String> erros) {
		this.errors = erros;
	}

	public ApiErros(String message) {
		this.errors = Arrays.asList(message);
	}
}
