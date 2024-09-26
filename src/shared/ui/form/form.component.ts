import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  ViewChild,
} from '@angular/core';
import { TaskAPI } from 'shared/api';
import { fadeInOut } from 'shared/lib';
import { ButtonConfig } from '../button';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  animations: [fadeInOut],
  host: {
    '[@fadeInOut]': '',
  },
})
export class FormComponent {
  //UI Logic
  @ViewChild('taskForm', { read: ElementRef })
  formElement!: ElementRef<HTMLFormElement>;

  public formService: FormService = inject(FormService);

  @HostListener('click', ['$event.target']) removeForm(eventTarget: Node) {
    if (!this.formElement.nativeElement.contains(eventTarget)) {
      this.formService.removeForm();
    }
  }
  @HostListener('window:keydown', ['$event']) closeFormWithEscapeBtn(
    event: KeyboardEvent
  ) {
    if (event.key === 'Escape') {
      this.formService.removeForm();
    }
  }
  public formTitle: string = '';

  public buttonConfig: ButtonConfig = {
    title: '',
    svgId: '',
    stylesClass: '',
  };
  //Form Handling Logic
  public formModel: TaskAPI = {
    title: '',
    desc: '',
    completed: false,
  };

  public readonly formSubmitEvent: EventEmitter<TaskAPI> =
    new EventEmitter<TaskAPI>();

  public onSubmit() {
    this.formSubmitEvent.emit(this.formModel);
  }
}
