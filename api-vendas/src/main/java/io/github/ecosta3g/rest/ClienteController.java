package io.github.ecosta3g.rest;

import javax.persistence.metamodel.StaticMetamodel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.github.ecosta3g.model.entity.Cliente;
import io.github.ecosta3g.model.repository.ClienteRepository;

@RestController("/clientes")
public class ClienteController {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente salvar(Cliente cliente) {
		return clienteRepository.save(cliente);
	}

}
