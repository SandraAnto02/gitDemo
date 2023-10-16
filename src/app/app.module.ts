import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GitcomponentComponent } from './gitcomponent/gitcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    GitcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
