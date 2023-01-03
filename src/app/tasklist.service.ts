import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasklistService {
  private taskList: Task[] = [];
  constructor() { }

  insertTask(task: Task) {
    this.taskList.push(task);
  }

  removeTask() {

  }

  updateTask() {
    
  }

  getTaskList() {
    return this.taskList;
  }
}