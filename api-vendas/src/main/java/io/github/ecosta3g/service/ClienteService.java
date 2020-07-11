package io.github.ecosta3g.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.github.ecosta3g.model.Cliente;
import io.github.ecosta3g.repository.ClienteRepository;

@Service
public class ClienteService {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	public void salvarCliente(Cliente cliente) {
		validarCliente(cliente);
		clienteRepository.persistir(cliente);
	}
	
	public void validarCliente(Cliente cliente) {
		//TODO: realiza as validação sobre o cliente  ser persistido.
	}

}
