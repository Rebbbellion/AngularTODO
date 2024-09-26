import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/lib';
import { ButtonComponent } from './button';

@NgModule({
  declarations: [ButtonComponent],
  imports: [SharedModule],
  exports: [ButtonComponent],
})
export class UiModule {}
