package io.github.ecosta3g.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import io.github.ecosta3g.model.entity.Cliente;
import io.github.ecosta3g.model.repository.ClienteRepository;

@RestController
@RequestMapping("/api/clientes")
public class ClienteController {
	
	@Autowired
	private ClienteRepository clienteRepository;

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente salvar(@RequestBody Cliente cliente) {
		return clienteRepository.save(cliente);
	}
	
	@GetMapping("/{id}")
	public Cliente buscarPorId(@PathVariable Integer id) {
		return clienteRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void removerPorId(@PathVariable Integer id) {
		clienteRepository
			.findById(id)
			.map(cliente -> {
				clienteRepository.delete(cliente);
				return Void.TYPE;
			})
			.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
	}

}
