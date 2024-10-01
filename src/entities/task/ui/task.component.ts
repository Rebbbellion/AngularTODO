import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  host: {
    '[class.strikethrough]': 'task.completed',
  },
})
export class TaskComponent {
  @Input() public task: Task = {
    title: '',
    desc: '',
    completed: false,
    apiId: '',
  };
  @Input() public localId: number = 0;

  @Output() public editTaskEvent: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() public deleteTaskEvent: EventEmitter<Task> =
    new EventEmitter<Task>();
}
