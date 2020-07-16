import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getCliente(): Cliente{
    const cliente: Cliente = new Cliente();
    cliente.nome = 'Fulano de Tal';
    cliente.cpf = '11111111111';

    return cliente;
  }
}
