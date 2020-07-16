import { Router, ActivatedRoute } from '@angular/router';
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
  id: number;

  constructor(
    private clienteService: ClientesService,
    private router: Router,
    private activedRouter: ActivatedRoute) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    const params = this.activedRouter.params;
    if (params && params.value && params.value.id){
      this.id = params.value.id;
      this
        .clienteService
        .buscarPorId(this.id)
        .subscribe(
          response => this.cliente = response,
          errorResponse => this.cliente = new Cliente()
        );
    }
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
