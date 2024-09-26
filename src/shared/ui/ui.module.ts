import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/lib';
import { ButtonComponent } from './button';
import { CheckboxComponent } from './checkbox';
import { FormComponent } from './form';

@NgModule({
  declarations: [ButtonComponent, CheckboxComponent, FormComponent],
  imports: [SharedModule],
  exports: [ButtonComponent, CheckboxComponent, FormComponent],
})
export class UiModule {}
