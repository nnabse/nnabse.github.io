import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NicknameBackgroundComponent } from '@components/nickname-background/nickname-background.component';
import { SeparatorComponent } from '@components/separator/separator.component';
import { StackComponent } from '@components/stack/stack.component';

@NgModule({
  declarations: [
    AppComponent,
    NicknameBackgroundComponent,
    SeparatorComponent,
    StackComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
