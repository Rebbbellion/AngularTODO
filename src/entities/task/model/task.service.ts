import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FirebaseService, TaskAPI, TasksCollectionResponse } from 'shared/api';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly apiService = inject(FirebaseService);
  private transformTasks(
    taskObj: TasksCollectionResponse | null
  ): Task[] | null {
    if (taskObj) {
      return (Object.keys(taskObj) as Array<keyof TasksCollectionResponse>).map(
        (taskId: 'id') => ({
          ...taskObj[taskId],
          apiId: taskId,
        })
      );
    }
    return null;
  }

  public getTasks(): Observable<Task[] | null> {
    return this.apiService
      .getTasks()
      .pipe(
        map((taskObj: TasksCollectionResponse | null) =>
          this.transformTasks(taskObj)
        )
      );
  }
  public createTask(task: TaskAPI): Observable<Task | null> {
    return this.apiService
      .createTask(task)
      .pipe(map(({ name }) => ({ ...task, apiId: name })));
  }

  public updateTask(taskId: string, task: TaskAPI): Observable<Task | null> {
    return this.apiService
      .updateTask(taskId, task)
      .pipe(map((task: TaskAPI) => ({ ...task, apiId: taskId })));
  }

  public deleteTask(taskId: string): Observable<null> {
    return this.apiService.deleteTask(taskId);
  }
}
