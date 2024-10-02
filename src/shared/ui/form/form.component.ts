import {
  Component,
  ElementRef,
  HostListener,
  inject,
  ViewChild,
} from '@angular/core';
import { fadeInOut } from 'shared/lib';
import { FormCreationConfig } from './form.config';
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
  public formElement!: ElementRef<HTMLFormElement>;

  public formConfig!: FormCreationConfig;
  //Listeners
  @HostListener('click', ['$event.target']) public removeForm(
    eventTarget: Node
  ) {
    if (!this.formElement.nativeElement.contains(eventTarget)) {
      this.formService.removeForm();
    }
  }
  @HostListener('window:keydown', ['$event']) public closeFormWithEscapeBtn(
    event: KeyboardEvent
  ) {
    if (event.key === 'Escape') {
      this.formService.removeForm();
    }
  }
  //Form Handling Logic
  public readonly formService: FormService = inject(FormService);

  public onSubmit() {
    if (this.formConfig.formType === 'edit') {
      this.formService.taskEditSubject.next(this.formConfig.formValues);
    } else {
      this.formService.taskCreateSubject.next(this.formConfig.formValues);
    }
  }
}
