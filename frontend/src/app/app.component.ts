import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { AppModule } from './app.module';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, AppModule,
    TodolistComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ApiService]
})

export class AppComponent {
  title = 'frontend';

  tasks = []

  constructor (private api: ApiService) {
    this.getTasks()
  }

  getTasks = () => {
    this.api.getAllTasks().subscribe({
      next: data => { this.tasks = data },
      error: err => { console.log(err) },
      complete: () => { console.log("Pegou dados") }
    })
  }
}
