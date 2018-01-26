import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  description: string;
  priority: boolean;

  constructor() { }

  ngOnInit() {
  }

  addToDo() {
    const todoAdded = {description: this.description, priority: this.priority};
    console.log(todoAdded);
  }

}
