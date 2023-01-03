import { Component } from '@angular/core';
import { Task } from './task.model';
import { TasklistService } from './tasklist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do-app';
  taskDescription: string = '';
  taskList: string[] = [];

  constructor(public tasklistService: TasklistService) {}

  addTask(): void {
    // console.log(this.taskDescription)
    // this.taskList.push(this.taskDescription);
    // this.taskDescription = '';
    // console.log(this.taskList);
    const newTask = new Task(this.taskDescription);
    this.tasklistService.insertTask(newTask);
    this.taskDescription = '';
  }
  search : String ="";
  
}

  
