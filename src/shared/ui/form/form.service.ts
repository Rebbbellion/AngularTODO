import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { FormComponent } from './form.component';
import { FormCreationConfig } from './form.config';
import { FormValues } from './form.model';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private formComponentRef: ComponentRef<FormComponent> | null = null;

  public createForm(
    container: ViewContainerRef,
    formConfig: FormCreationConfig
  ) {
    if (!this.formComponentRef) {
      this.formComponentRef = container.createComponent(FormComponent);
      this.formComponentRef.instance.formConfig = formConfig;
    }
  }

  public removeForm() {
    if (this.formComponentRef) {
      this.formComponentRef.destroy();
      this.formComponentRef = null;
      this.formClosedSubject.next();
    }
  }

  public readonly taskCreateSubject: Subject<FormValues> = new Subject();
  public readonly taskEditSubject: Subject<FormValues> = new Subject();
  public readonly formClosedSubject: Subject<void> = new Subject<void>();
}
