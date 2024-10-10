import { inject, Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { FirebaseService, TaskAPI, TasksCollectionResponse } from 'shared/api';
import { FormValues } from 'shared/ui';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly apiService = inject(FirebaseService);
  private transformTasks(taskObj: TasksCollectionResponse | null): Task[] {
    if (taskObj) {
      return (Object.keys(taskObj) as Array<keyof TasksCollectionResponse>).map(
        (taskId: 'id') => ({
          ...taskObj[taskId],
          apiId: taskId,
        })
      );
    }
    return [];
  }

  public getTasks(): Observable<Task[]> {
    return this.apiService.getTasks().pipe(
      map((taskObj: TasksCollectionResponse | null) =>
        this.transformTasks(taskObj)
      ),
      take(1)
    );
  }
  public createTask(task: FormValues): Observable<Task> {
    return this.apiService.createTask(task).pipe(
      map(({ name }) => ({ ...task, apiId: name })),
      take(1)
    );
  }

  public updateTask(taskId: string, task: TaskAPI): Observable<Task> {
    return this.apiService.updateTask(taskId, task).pipe(
      map((task: TaskAPI) => ({ ...task, apiId: taskId })),
      take(1)
    );
  }

  public deleteTask(taskId: string): Observable<null> {
    return this.apiService.deleteTask(taskId).pipe(take(1));
  }
}
