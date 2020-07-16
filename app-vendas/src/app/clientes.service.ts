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

  buscarTodos(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8080/api/clientes/');
  }

}