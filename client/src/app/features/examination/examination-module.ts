import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminationAdd } from './pages/examination-add/examination-add';
import { ExaminationDetails } from './pages/examination-details/examination-details';
import { ExaminationEdit } from './pages/examination-edit/examination-edit';
import { ExaminationList } from './pages/examination-list/examination-list';
import { LoginComponent } from '../login-component/login-component';
import { ExaminationRoutingModule } from './examination-routing.module';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [ExaminationAdd, ExaminationDetails, ExaminationEdit, ExaminationList, LoginComponent],
  imports: [
    CommonModule,
    ExaminationRoutingModule,
    SharedModule
  ],
})
export class ExaminationModule {}
