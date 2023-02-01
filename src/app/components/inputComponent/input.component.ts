import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',

  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Output() inputValue = new EventEmitter<string>();

  showPassword = false;
  value = '';
  modelChangeFn = (e: any) => {
    this.value = e;
    this.inputValue.emit(e);
  };
}
