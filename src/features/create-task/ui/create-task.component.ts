import { Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import {
  BUTTON_CONFIGS,
  ButtonConfig,
  FormCreationConfig,
  FormService,
} from 'shared/ui';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss',
})
export class CreateTaskComponent {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  public formContainer!: ViewContainerRef;

  public readonly buttonConfig: ButtonConfig = BUTTON_CONFIGS['createBtn'];

  public readonly formConfig: FormCreationConfig = {
    title: 'Create Task',
    buttonConfig: this.buttonConfig,
    formType: 'create',
    formValues: {
      title: '',
      desc: '',
      completed: false,
    },
  };
  public readonly formService: FormService = inject(FormService);

  showForm() {
    this.formService.createForm(this.formContainer, this.formConfig);
  }
}
