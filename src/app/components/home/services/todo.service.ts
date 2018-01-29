import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {

  todos: Observable<any[]>;
  todo: Todo;
  todosRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.todosRef = this.db.list('todos');
    this.todos = this.todosRef.snapshotChanges().map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()
      }));
    });
  }

  getTodos() {
    return this.todos;
  }

  newTodo(todo: Todo) {
    this.todosRef.push(todo);
  }

  toggleCompleteTodo(todo, todoKey) {
    this.todo = todo;
    this.todo.completed = !this.todo.completed;
    return this.todosRef.update(todoKey, this.todo);
  }

  deleteTodo(todoKey) {
    console.log(todoKey);
    return this.todosRef.remove(todoKey);
  }
}
