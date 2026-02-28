import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationAdd } from './pages/organization-add/organization-add';
import { OrganizationDetails } from './pages/organization-details/organization-details';
import { OrganizationEdit } from './pages/organization-edit/organization-edit';
import { OrganizationList } from './pages/organization-list/organization-list';
import { OrganizationRoutingModule } from './organization-routing.module';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [OrganizationAdd, OrganizationDetails, OrganizationEdit, OrganizationList],
  imports: [
       CommonModule,
    OrganizationRoutingModule,
    SharedModule
  ]
   
})
export class OrganizationModule {}
