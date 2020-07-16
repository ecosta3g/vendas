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

  constructor(private clienteService: ClientesService) {
    this.cliente = clienteService.getCliente();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.cliente);
  }

}
