import { Router } from '@angular/router';
import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean;
  errors: string[];

  constructor(
    private clienteService: ClientesService,
    private router: Router) {
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
        this.cliente = response;
      }, errorResponse => {
        this.errors = errorResponse.error.errors;
        this.success = false;
      });
  }

  voltarParaListagem(): void{
    this.router.navigate(['/clientes-lista']);
  }

}
