import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PractitionerList } from './pages/practitioner-list/practitioner-list';
import { PractitionerAdd } from './pages/practitioner-add/practitioner-add';
import { PractitionerEdit } from './pages/practitioner-edit/practitioner-edit';
import { PractitionerDetails } from './pages/practitioner-details/practitioner-details';


const routes: Routes = [
  {path: 'list', component: PractitionerList},
  {path: 'add', component: PractitionerAdd},
  {path: 'edit/:id', component: PractitionerEdit},
  {path: 'details/:id', component: PractitionerDetails},
  {path: '', redirectTo:'list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PractitionerRoutingModule { }
