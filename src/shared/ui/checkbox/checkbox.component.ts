import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckBoxInputs } from './checkbox-inputs.model';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  @Input() public checkboxInputs: CheckBoxInputs = {
    id: 0,
    isChecked: false,
  };

  @Output() public readonly inputCheckedEvent: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  public onCheckboxChange(event: Event): void {
    const inputState: boolean = (<HTMLInputElement>event.target).checked;
    this.inputCheckedEvent.emit(inputState);
  }
}
