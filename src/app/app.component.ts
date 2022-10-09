import { Component } from '@angular/core';
import { TasksService } from './services/tasks.service';
import {Datainterface } from './interfaces/datainterface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testing';
  tasks:Datainterface[] = []
  constructor(private tasksService:TasksService) {
    this.tasksService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    })
  }
  deleteTask=(id:any):void=>{
    console.log("delete task"+id);
    // this.tasksService.deleteTask(id);
    confirm("Are you sure you want to delete this task?");
    this.tasks=this.tasks.filter(item => item.id !== id);
  }
}
