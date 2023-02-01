import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'password strength';
  password = '';

  setValue = (value: string): void => {
    this.password = value;
  };
}
