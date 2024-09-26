import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'environments';
import { Observable } from 'rxjs';
import {
  TaskAPI,
  TaskCreationResponse,
  TasksCollectionResponse,
} from './firebase.models';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  public getTasks(): Observable<TasksCollectionResponse | null> {
    return this.httpClient.get<TasksCollectionResponse | null>(
      `${environment.baseURL}.json`
    );
  }
  public createTask(task: TaskAPI): Observable<TaskCreationResponse> {
    return this.httpClient.post<TaskCreationResponse>(
      `${environment.baseURL}.json`,
      task
    );
  }

  public updateTask(taskId: string, task: TaskAPI): Observable<TaskAPI> {
    return this.httpClient.put<TaskAPI>(
      `${environment.baseURL}/${taskId}.json`,
      task
    );
  }

  public deleteTask(taskId: string): Observable<null> {
    return this.httpClient.delete<null>(
      `${environment.baseURL}/${taskId}.json`
    );
  }
}
