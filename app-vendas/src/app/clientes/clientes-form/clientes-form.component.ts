import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
    const params: Observable<Params> = this.activedRouter.params;
    params.subscribe( urlParams => {
      this.id = urlParams.id;
      if (this.id){
        this
        .clienteService
        .buscarPorId(this.id)
        .subscribe(
          response => this.cliente = response,
          errorResponse => this.cliente = new Cliente()
        );
      }
    });
  }

  onSubmit(): void {
    if (this.cliente.id){
      this
        .clienteService
        .atualizar(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.router.navigate(['/clientes-lista/alterado']);
        }, errorResponse => {
          this.errors = errorResponse.error.errors;
          this.success = false;
        });
    } else {
      this
        .clienteService
        .salvar(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.cliente = response;
          this.router.navigate(['/clientes-lista/cadastrado']);
        }, errorResponse => {
          this.errors = errorResponse.error.errors;
          this.success = false;
        });
    }

  }

  voltarParaListagem(): void{
    this.router.navigate(['/clientes-lista']);
  }

}
