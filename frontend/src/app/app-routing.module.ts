import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CalculatorComponent} from "./calculator/calculator.component";
import {NotesComponent} from "./notes/notes.component";
import {LayoutComponent} from "./layout/layout.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', redirectTo: '/dashboard', pathMatch:'full'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'calculator', component: CalculatorComponent},
      {path: 'notes', component: NotesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
