import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { HotelsModule } from "./hotels/hotels.module";

@NgModule({
  imports: [
    BrowserModule,
    HotelsModule,
    Angular2FontawesomeModule,
    routing
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
