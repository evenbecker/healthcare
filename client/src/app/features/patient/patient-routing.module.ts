import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientList } from './pages/patient-list/patient-list';
import { PatientAdd } from './pages/patient-add/patient-add';
import { PatientEdit } from './pages/patient-edit/patient-edit';
import { PatientDetails } from './pages/patient-details/patient-details';


const routes: Routes = [
  {path: 'list', component: PatientList},
  {path: 'add', component: PatientAdd},
  {path: 'edit/:id', component: PatientEdit},
  {path: 'details/:id', component: PatientDetails},
  {path: '', redirectTo:'list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
