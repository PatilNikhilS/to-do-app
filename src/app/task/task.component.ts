import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task.model';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  constructor() { 
    this.task = new Task("test");
  }

  ngOnInit(): void {
  }

}
