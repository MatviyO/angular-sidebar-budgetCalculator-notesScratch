import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {NotesComponent} from './pages/notes/notes.component';
import {CalculatorComponent} from './pages/calculator/calculator.component';
import {LayoutComponent} from './layout/layout.component';
import {AddItemComponent} from './shared/component/add-item/add-item.component';
import {ItemListComponent} from './shared/component/item-list/item-list.component';
import {ItemCardComponent} from './shared/component/item-card/item-card.component';
import {FormsModule} from "@angular/forms";
import {EditItemComponent} from './shared/component/edit-item/edit-item.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from '@angular/material/dialog';
import { NoteLsitComponent } from './pages/notes/note-list/note-lsit.component';
import { AddNotesComponent } from './pages/notes/add-notes/add-notes.component';
import { EditNotesComponent } from './pages/notes/edit-notes/edit-notes.component';
import { NoteFilterComponent } from './pages/notes/note-filter/note-filter.component';
import { NoteCardComponent } from './pages/notes/note-card/note-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotesComponent,
    CalculatorComponent,
    LayoutComponent,
    AddItemComponent,
    ItemListComponent,
    ItemCardComponent,
    EditItemComponent,
    NoteLsitComponent,
    AddNotesComponent,
    EditNotesComponent,
    NoteFilterComponent,
    NoteCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatDialogModule

  ],
  providers: [],
  entryComponents: [EditItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
