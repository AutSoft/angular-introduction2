import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HoverDirective } from './hover.directive';
import { HeartPipe } from './heart.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HoverDirective,
    HeartPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
