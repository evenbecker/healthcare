import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExaminationList } from './pages/examination-list/examination-list';
import { ExaminationAdd } from './pages/examination-add/examination-add';
import { ExaminationDetails } from './pages/examination-details/examination-details';
import { ExaminationEdit } from './pages/examination-edit/examination-edit';


const routes: Routes = [
  {path: 'list', component: ExaminationList},
  {path: 'add', component: ExaminationAdd},
  {path: 'details/:id', component: ExaminationDetails},
  {path: 'edit/:id', component: ExaminationEdit},
  {path: '', redirectTo:'list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExaminationRoutingModule { }
