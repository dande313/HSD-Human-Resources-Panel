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
  getRandomQuote: any;
  nothingQuotes= [
    {text: `"There is no fun in doing nothing when you have nothing to do."`, author: 'Jerome K Jerome'},
    {text: `"I'd rather attempt to do something great and fail, than to attempt to do nothing and succeed."`, author: 'Robert H Schuller'},
    {text: `"The hardest work of all is to do nothing."`, author: 'Ghandi'},
    {text: `"We become aware of the void as we fill it."`, author: 'Antonio Porchia'},
    {text: `"If you look long enough into the void, the void begins to look back into you."`, author: 'Friedrich Nietzche'},
    {text: `"The only thing necessary for the triumph of evil is for good men to do nothing."`, author: 'Edmund Burke'},
    {text: `"Sometimes, the most important thing is to do nothing."`, author: 'Debasish Mridha'},
    {text: `"I believe in a fate that will fall on us if we do nothing."`, author: 'Ronald Reagan'},
    {text: `"The only way to avoid failure is to sit in a corner and do nothing."`, author: 'Kevin Leman'},
    {text: `"People say nothing is impossible, but I do nothing all day."`, author: 'Winnie the Pooh'},
    {text: `"This is the real secret of life -- to be completely engaged with what you are doing in the here and now. And instead of calling it work, realize it is play."`, author: 'Alan Watts'},
    {text: `"Muddy water is best cleared just by leaving it alone."`, author: 'Alan Watts'},
  ];
  nothingQuote: any;

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
    });
    this.nothingQuote = this.nothingQuotes[Math.floor(Math.random() * this.nothingQuotes.length)];
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
