import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { TaskAPI } from 'shared/api';
import { FormComponent } from './form.component';
import { FormCreationConfig } from './form.config';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private formComponentRef: ComponentRef<FormComponent> | null = null;

  public createForm(
    container: ViewContainerRef,
    formConfig: FormCreationConfig,
    formValues: TaskAPI
  ) {
    if (!this.formComponentRef) {
      this.formComponentRef = container.createComponent(FormComponent);
      this.formComponentRef.instance.formTitle = formConfig.title;
      this.formComponentRef.instance.buttonConfig = formConfig.buttonConfig;
      this.formComponentRef.instance.formModel = formValues;
      this.formComponentRef.instance.formSubmitEvent.subscribe(
        formConfig.submitCallback
      );
    }
  }

  public removeForm() {
    if (this.formComponentRef) {
      this.formComponentRef.destroy();
      this.formComponentRef = null;
    }
  }
}
