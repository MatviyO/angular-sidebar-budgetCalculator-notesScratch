import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {CalculatorComponent} from "./pages/calculator/calculator.component";
import {NotesComponent} from "./pages/notes/notes.component";
import {LayoutComponent} from "./layout/layout.component";
import {EditNotesComponent} from "./pages/notes/edit-notes/edit-notes.component";
import {NoteLsitComponent} from "./pages/notes/note-list/note-lsit.component";
import {AddNotesComponent} from "./pages/notes/add-notes/add-notes.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', redirectTo: '/dashboard', pathMatch:'full'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'calculator', component: CalculatorComponent},
      {path: 'notes', component: NotesComponent, children: [
          {path: '', component: NoteLsitComponent},
          {path: 'new', component: AddNotesComponent},
          {path: ':id', component: AddNotesComponent}
        ]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
