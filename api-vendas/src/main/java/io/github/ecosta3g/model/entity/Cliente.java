package io.github.ecosta3g.model.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
public class Cliente {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(length = 150, nullable = false)
	private String nome;
	
	@Column(length = 11, nullable = false)
	private String cpf;
	
	@Column(name = "data_cadastro")
	private LocalDate dataCadastro;
	
}
