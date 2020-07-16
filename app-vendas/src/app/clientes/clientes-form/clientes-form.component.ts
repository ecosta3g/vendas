import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean;
  errors: string[];

  constructor(private clienteService: ClientesService) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.cliente);
    this
      .clienteService
      .salvar(this.cliente)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
      }, errorResponse => {
        this.errors = errorResponse.error.errors;
      });
  }

}
