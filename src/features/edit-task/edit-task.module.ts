import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/lib';
import { UiModule } from 'shared/ui';
import { EditTaskComponent } from './ui';

@NgModule({
  declarations: [EditTaskComponent],
  imports: [SharedModule, UiModule],
  exports: [EditTaskComponent],
})
export class EditTaskModule {}
