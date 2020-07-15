import { HelloComponent } from './hello/hello.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoAngularComponent } from './curso-angular/curso-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CursoAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
