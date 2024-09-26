import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  @Output() public readonly inputCheckedEvent: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  public onCheckboxChange(event: Event): void {
    const inputState: boolean = (<HTMLInputElement>event.target).checked;
    this.inputCheckedEvent.emit(inputState);
  }
}
