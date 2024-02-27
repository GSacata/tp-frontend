import { Component } from '@angular/core';
import { Task } from '../models/task';
import { MOCKTASKLIST } from '../other_files/mock_tasks';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [
    AppModule
  ],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  // task: Task = {
  //   id: 1,
  //   title: 'angular test task',
  //   description: 'Creating a task to test interface',
  //   is_done: false,
  //   created: 'right now',
  //   last_update: 'right right now'
  // }
  task = MOCKTASKLIST;
}
