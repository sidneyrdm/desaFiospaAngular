import { Component, OnInit } from '@angular/core';
import { professores } from '../model/professores';

@Component({
  selector: 'spa-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  listaProfessores: professores[] = [
    { nome: 'Raniere M', disciplina: 'Matemática', email: 'RaniereM@gmail.com'},
    { nome: 'Diogo P', disciplina: 'Programação de Computadores', email: 'DiogoP@gmail.com'},
    { nome: 'Jarley A', disciplina: 'Programação Funcional', email: 'Jarley@gmail.com'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
