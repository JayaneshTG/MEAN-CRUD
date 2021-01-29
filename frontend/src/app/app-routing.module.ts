import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCreateComponent } from './components/detail-create/detail-create.component';
import { DetailListComponent } from './components/detail-list/detail-list.component';
import { DetailEditComponent } from './components/detail-edit/detail-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-detail'},
  { path: 'create-detail', component: DetailCreateComponent },
  { path: 'edit-detail/:id', component: DetailEditComponent },
  { path: 'details-list', component: DetailListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
