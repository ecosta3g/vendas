import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente;
  resultado: string;
  msgSucesso: string;
  msgErro: string;

  constructor(
    private clienteService: ClientesService,
    private router: Router,
    private activedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.clienteService.buscarTodos().subscribe(response => this.clientes = response);
    const params: Observable<Params> = this.activedRouter.params;
    console.log(params);
    params.subscribe( urlParams => {
      this.resultado = urlParams.resultado;
      if (this.resultado){
        this.msgSucesso = `Cliente ${this.resultado} com sucesso!`;
      }
    });
  }

  novoCadastro(): void{
    this.router.navigate(['/clientes-form']);
  }

  preparaRemoverCliente(cliente: Cliente): void{
    this.clienteSelecionado = cliente;
  }

  removerCliente(): void{
    this
      .clienteService
      .remover(this.clienteSelecionado.id)
      .subscribe( response => {
        this.msgSucesso = 'Cliente removido com sucesso!';
        this.msgErro = null;
        this.router.navigate(['/clientes-lista/removido']);
        this.ngOnInit();
      }, erroResponse => {
        this.msgErro = 'Ocorreu um erro ao deletar o cliente.';
        this.msgSucesso = null;
      });
  }

}
