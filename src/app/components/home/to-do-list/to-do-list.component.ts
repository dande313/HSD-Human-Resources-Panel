import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
import { TodoService } from '../services/todo.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent implements OnInit {
  todos = [];
  temp = [];
  description: string;
  priority = false;
  completed: boolean;
  loggedInUser: string;

  constructor(
    public todoService: TodoService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
        this.loggedInUser = auth.email;
    });
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos.filter(todo => todo.userEmail === this.loggedInUser);
      console.log(todos);
    });
  }

  addToDo() {
    const todoAdded = {description: this.description, priority: this.priority, userEmail: this.loggedInUser, completed: false};
    if (todoAdded.description !== undefined && todoAdded.description.replace(/\s/g, '') !== '') {
      console.log(todoAdded);
      this.todoService.newTodo(todoAdded);
    }
  }

  toggleCompleteTodo(todo, todoKey) {
    this.todoService.toggleCompleteTodo(todo, todoKey);
  }

  delete(todoKey) {
    console.log('Deleted ' + todoKey);
    this.todoService.deleteTodo(todoKey);
  }

}
