import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient ) { }

  salvar(cliente: Cliente): Observable<Cliente> {
    console.log(cliente);
    return this.http.post<Cliente>('http://localhost:8080/api/clientes/', cliente);
  }

  atualizar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/api/clientes/', Cliente);
  }

  buscar(): Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/api/clientes/', Cliente);
  }

  remover(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/api/clientes/', Cliente);
  }

  getCliente(): Cliente{
    const cliente: Cliente = new Cliente();
    cliente.nome = 'Fulano de Tal';
    cliente.cpf = '11111111111';

    return cliente;
  }
}
