import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BackgroundTextComponent } from '@components/background-text/background-text.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, BackgroundTextComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
