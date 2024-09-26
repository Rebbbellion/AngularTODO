import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/lib';
import { ButtonComponent } from './button';
import { CheckboxComponent } from './checkbox';

@NgModule({
  declarations: [ButtonComponent, CheckboxComponent],
  imports: [SharedModule],
  exports: [ButtonComponent, CheckboxComponent],
})
export class UiModule {}
