import { Component, Input, OnInit } from '@angular/core';
import { alunos } from '../model/alunos';

@Component({
  selector: 'spa-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

    listaAlunos: alunos[] = [
    { nome: 'Sidney', idade: 31, email: 'sidneybritomal@gmail.com', curso: 'Ciencia da Computacao' },
    { nome: 'Sidney2', idade: 32, email: 'sidneyfornet@gmail.com', curso: 'Engenharia da Computacao' },
    { nome: 'Sidney3', idade: 33, email: 'sidneybritomal@hotmail.com', curso: 'Sistemas de Informacao' }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
