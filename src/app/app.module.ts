import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EngineersComponent } from './engineers/engineers.component';
import { EngineerListComponent } from './engineer-list/engineer-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NameInputComponent } from './name-input/name-input.component';
import { JustEngineerListComponent } from './just-engineer-list/just-engineer-list.component';
import { CalculateSalaryPipe } from './calculate-salary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EngineersComponent,
    EngineerListComponent,
    NameInputComponent,
    JustEngineerListComponent,
    CalculateSalaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
