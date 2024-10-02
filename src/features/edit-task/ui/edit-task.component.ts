import {
  Component,
  inject,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Task } from 'entities/task/model';
import {
  BUTTON_CONFIGS,
  ButtonConfig,
  FormCreationConfig,
  FormService,
} from 'shared/ui';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss',
})
export class EditTaskComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  public formContainer!: ViewContainerRef;

  buttonConfig: ButtonConfig = BUTTON_CONFIGS['editBtn'];

  public formConfig!: FormCreationConfig;

  @Input() public currentEditTask: Task = {
    title: 'Task',
    desc: '',
    completed: false,
    apiId: '',
  };

  public readonly formService: FormService = inject(FormService);

  ngOnInit(): void {
    this.formConfig = {
      title: 'Edit Task',
      buttonConfig: this.buttonConfig,
      formType: 'edit',
      formValues: this.currentEditTask,
    };

    this.formService.createForm(this.formContainer, this.formConfig);
  }
}
