import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-indicator-wrapper',
  templateUrl: './indicatorWrapper.component.html',
  styleUrls: ['./indicatorWrapper.component.scss'],
})
export class IndicatorWrapper {
  @Input() password: string;
}
