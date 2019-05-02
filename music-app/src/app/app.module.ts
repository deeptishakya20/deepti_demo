import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent],

  imports: [
    BrowserModule,
    MainModule
  ]

  
 
})
export class AppModule { }
