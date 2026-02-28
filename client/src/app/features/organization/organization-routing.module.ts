import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationList } from './pages/organization-list/organization-list';
import { OrganizationAdd } from './pages/organization-add/organization-add';
import { OrganizationEdit } from './pages/organization-edit/organization-edit';
import { OrganizationDetails } from './pages/organization-details/organization-details';


const routes: Routes = [
  {path: 'list', component: OrganizationList},
  {path: 'add', component: OrganizationAdd},
  {path: 'edit/:id', component: OrganizationEdit},
  {path: 'details/:id', component: OrganizationDetails},
  {path: '', redirectTo:'list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
