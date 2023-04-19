import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { EditComponent} from './edit/edit.component';
import { ViewComponent } from './view/view.component';

import { AppComponent } from './app.component';
const routes: Routes = [

  { path: '', component:  ViewComponent }, //view delete
  { path: 'edit-people/:id', component:  EditComponent }, //edit
  { path: 'create-people', component: CreateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


