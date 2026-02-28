import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientAdd } from './pages/patient-add/patient-add';
import { PatientDetails } from './pages/patient-details/patient-details';
import { PatientEdit } from './pages/patient-edit/patient-edit';
import { PatientList } from './pages/patient-list/patient-list';
import { PatientRoutingModule } from './patient-routing.module';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [PatientAdd, PatientDetails, PatientEdit, PatientList],
  imports: [
        CommonModule,
    PatientRoutingModule,
    SharedModule
  ]
})
export class PatientModule {}
