import { Component } from '@angular/core';
// import { Task } from '../models/task';
import { MOCKTASKLIST } from '../other_files/mock_tasks';
import { AppModule } from '../app.module';
import { ApiService } from '../services/api.service';

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
  task = MOCKTASKLIST;

  constructor (private api: ApiService) {
    this.getTasks()
  }

  getTasks = () => {
    this.api.getAllTasks().subscribe({
      next: data => { this.task = data },
      error: err => { console.log(err) },
      complete: () => { console.log("Pegou dados") }
    })
  }
}
