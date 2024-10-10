import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/lib';
import { TaskModule } from '../../entities/task/task.module';
import { EditTaskModule } from '../../features/edit-task/edit-task.module';
import { TaskListComponent } from './ui';

@NgModule({
  declarations: [TaskListComponent],
  imports: [SharedModule, TaskModule, EditTaskModule],
  exports: [TaskListComponent],
})
export class TaskListModule {}
