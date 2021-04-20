import { Component, Input, OnInit } from '@angular/core';
import { alunos } from '../model/alunos';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  exibeProfessores: boolean = false;
  exibeAlunos: boolean = false;
  exibeTurmas: boolean = false;

  constructor() { }


  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

  ngOnInit(): void {
  }

  exibirProfessores() {
      this.exibeProfessores = true;
      this.exibeAlunos = false;
      this.exibeTurmas=false;
  }

  exibirAlunos() {
    this.exibeProfessores = false;
    this.exibeAlunos = true;
    this.exibeTurmas=false;
}

exibirTurmas() {
  this.exibeProfessores = false;
  this.exibeAlunos = false;
  this.exibeTurmas=true;
}


}
