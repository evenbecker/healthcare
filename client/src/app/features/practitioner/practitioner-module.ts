import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PractitionerAdd } from './pages/practitioner-add/practitioner-add';
import { PractitionerDetails } from './pages/practitioner-details/practitioner-details';
import { PractitionerEdit } from './pages/practitioner-edit/practitioner-edit';
import { PractitionerList } from './pages/practitioner-list/practitioner-list';
import { PractitionerRoutingModule } from './practitioner-routing.module';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [PractitionerAdd, PractitionerDetails, PractitionerEdit, PractitionerList],
    imports: [
    CommonModule,
    PractitionerRoutingModule,
    SharedModule
  ]
})
export class PractitionerModule {}
