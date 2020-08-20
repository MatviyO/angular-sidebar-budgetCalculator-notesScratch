import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotesComponent } from './pages/notes/notes.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { LayoutComponent } from './layout/layout.component';
import { AddItemComponent } from './shared/component/add-item/add-item.component';
import { ItemListComponent } from './shared/component/item-list/item-list.component';
import { ItemCardComponent } from './shared/component/item-card/item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotesComponent,
    CalculatorComponent,
    LayoutComponent,
    AddItemComponent,
    ItemListComponent,
    ItemCardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
