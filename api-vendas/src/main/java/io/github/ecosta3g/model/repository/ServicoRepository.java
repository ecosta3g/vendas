package io.github.ecosta3g.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.github.ecosta3g.model.entity.Cliente;

@Repository
public interface ServicoRepository extends JpaRepository<Cliente, Integer>{

}
