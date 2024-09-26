import { Component, Input } from '@angular/core';
import { ButtonConfig } from './button.config';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  host: {
    '[class]': 'buttonConfig.stylesClass',
  },
})
export class ButtonComponent {
  @Input() public buttonConfig: ButtonConfig = {
    title: '',
    svgId: '',
    stylesClass: '',
  };
}
