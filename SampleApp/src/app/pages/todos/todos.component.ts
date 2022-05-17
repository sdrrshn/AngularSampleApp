import { Todo } from './../../models/todo';
import { Observable } from 'rxjs';
import { TodosService } from './../../services/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]> | undefined;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todos$ = this.todosService.getTodos();
  }
}
