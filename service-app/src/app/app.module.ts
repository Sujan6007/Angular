import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Person1Component } from './person1/person1.component';
import { Person2Component } from './person2/person2.component';

@NgModule({
  declarations: [
    AppComponent,
    Person1Component,
    Person2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
