import { Component } from '@angular/core';
import { Tarefa } from './tarefa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Lista de Tarefas';

  tarefas = [
    new Tarefa('Fazer Bolo'),
    new Tarefa('Testar o app')
  ];

  addTarefa(tarefa: string) {
    this.tarefas.push( new Tarefa(tarefa) );
  }
}
