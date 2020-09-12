import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserdisplayComponent } from './components/userdisplay/userdisplay.component';


@NgModule({
  declarations: [
    AppComponent,
    UserdisplayComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]  //this is the call to the first component of our angular application
})
export class AppModule { }
