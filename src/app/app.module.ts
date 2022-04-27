import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EngineersComponent } from './engineers/engineers.component';
import { EngineerListComponent } from './engineer-list/engineer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EngineersComponent,
    EngineerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
