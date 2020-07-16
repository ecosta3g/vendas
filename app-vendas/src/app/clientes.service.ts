import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient ) { }

  getCliente(): Cliente{
    const cliente: Cliente = new Cliente();
    cliente.nome = 'Fulano de Tal';
    cliente.cpf = '11111111111';

    return cliente;
  }
}
