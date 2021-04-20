import { Component, OnInit } from '@angular/core';
import { turmas } from '../model/turmas';

@Component({
  selector: 'spa-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {

  listaTurmas: turmas[] = [
    { descricao: 'Primeiro Ano', turno: 'Manhã', curso: 'Infantil'},
    { descricao: 'Segundo Ano', turno: 'Manhã', curso: 'Infantil'},
    { descricao: 'Terceiro Ano', turno: 'Manhã', curso: 'Infantil'},
    { descricao: 'Quarto Ano', turno: 'Tarde', curso: 'Fundamental'},
    { descricao: 'Quinto Ano', turno: 'Tarde', curso: 'Fundamental'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
