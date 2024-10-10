import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Task, TaskService } from 'entities/task/model';
import { Subject, takeUntil } from 'rxjs';
import { fadeInOut } from 'shared/lib';
import { FormService, FormValues } from 'shared/ui';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
  animations: [fadeInOut],
  host: {
    '[@fadeInOut]': '',
  },
})
export class TaskListComponent implements OnInit, OnDestroy {
  private readonly _destroySubject: Subject<void> = new Subject<void>();

  public tasks: Task[] = [];
  public taskOnEdit!: Task | null;

  public readonly taskService: TaskService = inject(TaskService);
  public readonly formService: FormService = inject(FormService);

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (tasksArray: Task[]) => {
        this.tasks = tasksArray;
      },
    });

    this.formService.taskCreateSubject
      .pipe(takeUntil(this._destroySubject))
      .subscribe((task) => {
        this.createTask(task);
      });

    this.formService.taskEditSubject
      .pipe(takeUntil(this._destroySubject))
      .subscribe((task) => {
        this.editTask(task);
      });

    this.formService.formClosedSubject
      .pipe(takeUntil(this._destroySubject))
      .subscribe(() => {
        this.taskOnEdit = null;
      });
  }

  createTask(formValues: FormValues): void {
    this.taskService.createTask(formValues).subscribe({
      next: (createdTask) => {
        this.tasks.push(createdTask);
      },
    });
  }

  editTask(formValues: FormValues): void {
    if (!formValues.apiId) {
      return;
    }

    const { apiId, ...task } = formValues;

    this.taskService.updateTask(apiId, task).subscribe({
      next: (task) => {
        const taskIndex = this.tasks.findIndex(
          (taskInArr) => taskInArr.apiId === apiId
        );
        this.tasks.splice(taskIndex, 1, task);
      },
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task.apiId).subscribe(() => {
      const taskIndex = this.tasks.findIndex(
        (taskInArr) => taskInArr.apiId === task.apiId
      );
      this.tasks.splice(taskIndex, 1);
    });
  }

  trackByFunction(index: number): number {
    return index;
  }

  ngOnDestroy(): void {
    this._destroySubject.next();
  }
}
