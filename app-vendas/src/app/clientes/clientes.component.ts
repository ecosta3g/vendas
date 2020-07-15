import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  nome: string;
  clientes: Cliente[];

  constructor(){
    this.nome = 'Edu';
    const fulano = new Cliente('Fulano', 10);
    const cicrano = new Cliente('Cicrano', 11);

    this.clientes = [fulano, cicrano];
  }

}

class Cliente {
  constructor(
    public nome: string,
    public idade: number
  ){

  }
}
