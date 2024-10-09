import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/lib';
import { ButtonComponent } from './button';
import { CheckboxComponent } from './checkbox';
import { FormComponent } from './form';
import { HeaderComponent } from './header';

@NgModule({
  declarations: [
    ButtonComponent,
    CheckboxComponent,
    FormComponent,
    HeaderComponent,
  ],
  imports: [SharedModule],
  exports: [ButtonComponent, CheckboxComponent, FormComponent, HeaderComponent],
})
export class UiModule {}
