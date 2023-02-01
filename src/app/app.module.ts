import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/appComponent/app.component';
import { InputComponent } from './components/inputComponent/input.component';
import { EyeSvg } from './components/eyeSvgComponent/eyeSvg.component';
import { IndicatorWrapper } from './components/indicatorWrapperComponent/indicatorWrapper.component';
import { CrossedOutEyeSvg } from './components/crossedOutEyeComponent/crossedOutEye.component';
import { FormsModule } from '@angular/forms';
import { PasswordReliabilityPipe } from './pipes/password-status.pipe';
import { Indicator } from './components/indicatorComponent/indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    EyeSvg,
    IndicatorWrapper,
    Indicator,
    CrossedOutEyeSvg,
    PasswordReliabilityPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
