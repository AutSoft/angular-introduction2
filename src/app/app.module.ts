import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HoverDirective } from './hover.directive';
import { HeartPipe } from './heart.pipe';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    HoverDirective,
    HeartPipe,
    InputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
