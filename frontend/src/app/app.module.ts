import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotesComponent } from './notes/notes.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotesComponent,
    CalculatorComponent,
    LayoutComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
