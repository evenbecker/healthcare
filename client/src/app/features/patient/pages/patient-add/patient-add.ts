import { Component, OnInit } from '@angular/core';
import { Patient } from '../../../../models/patient';
import { HttpPatientService } from '../../../../core/services/http-patient-service';
import { HttpOrganizationService } from '../../../../core/services/http-organization-service';
import { HttpPractitionerService } from '../../../../core/services/http-practitioner-service';
import { ToastService } from '../../../../core/services/toast-service';
import { Router } from '@angular/router';
import { Organization } from '../../../../models/organization';
import { Practitioner } from '../../../../models/practitioner';

@Component({
  selector: 'app-patient-add',
  standalone: false,
  templateUrl: './patient-add.html',
  styleUrl: './patient-add.css',
})
export class PatientAdd implements OnInit {
  patient: Patient = {} as Patient;
  nameSurname: string =''; //name and surname for practitioner

  constructor(private httpPatient: HttpPatientService, private httpOrganization: HttpOrganizationService,
    private httpPractitioner: HttpPractitionerService,
    private toastService: ToastService, private router: Router) { }

  ngOnInit(): void {
    this.patient.organization = {} as Organization;
    this.patient.practitioner = {} as Practitioner;
    this.patient.active = true;
  }

  savePatient(){
    console.log(this.patient);
    if(this.patient.organization.name == null){
      this.toastService.showToast('Patient not saved: Organization is required!', {header:'Saving patient', className: 'bg-danger text-light'})
      return;
    }
    if(this.patient.practitioner.name == null){
      this.toastService.showToast('Patient not saved: Practitioner is required!', {header:'Saving patient', className: 'bg-danger text-light'})
      return;
    }
    if(new Date() < new Date(this.patient.birthDate)){
      this.toastService.showToast('Patient not saved: Birth date can\'t be in the future!', {header:'Saving patient', className: 'bg-danger text-light'})
      return;
    }
    this.httpPatient.savePatient(this.patient).subscribe({
      next: res => {
        this.checkIfPatientIsSaved(res)
      },
      error: error => this.toastService.showToast('Patient not saved: Patient with that identifier already exists!', {header:'Saving patient', className: 'bg-danger text-light'})
    }
    );
  }

  checkIfPatientIsSaved(res: Patient){
    if(res.hasOwnProperty('id')){
      this.toastService.showToast('Patient saved successfully!', {header:'Saving patient', className: 'bg-success text-light'});
      this.router.navigate(['/patient']);
    } else{
      this.toastService.showToast('Patient not saved: ' + this.getMessage(res), {header:'Saving patient', className: 'bg-danger text-light'});
    }
  }

  getMessage(res: Patient){
    console.log(res);
    if(res.hasOwnProperty('identifier')){
      return res.identifier;
    }
    if(res.hasOwnProperty('name')){
      return res.name;
    }
    if(res.hasOwnProperty('surname')){
      return res.surname;
    }
    if(res.hasOwnProperty('birthDate')){
      return res.birthDate;
    }
    if(res.hasOwnProperty('organization')){
      return res.organization;
    }
    if(res.hasOwnProperty('practitioner')){
      return res.practitioner;
    }
    return res.email;
  }

  findOrganizationClick(){
    console.log(this.patient.organization);
    this.httpOrganization.getOrganizationByName(String(this.patient.organization.name)).subscribe({
      next: organization => {
        this.assignOrganization(organization)
      },
      error: error => this.toastService.showToast('Organization with that name doesn\'t exist!', {header:'Finding organization', className: 'bg-danger text-light'})

    }
    );
  }

  assignOrganization(organization: Organization){
    this.patient.organization = organization;
    this.toastService.showToast('Organization found successfully!', {header:'Finding organization', className: 'bg-success text-light'})
    this.patient.practitioner = {} as Practitioner;
    this.nameSurname = '';
    console.log(this.patient.organization);
  }

  findPractitionerClick(){
    var nameSurnameSplit = this.nameSurname.split (" ");
    console.log(nameSurnameSplit[0], nameSurnameSplit[1]);
    this.httpPractitioner.getPractitionerByFullNameAndOrg(nameSurnameSplit[0], nameSurnameSplit[1], this.patient.organization.id).subscribe({
      next: practitioner => {
        this.assignPractitioner(practitioner)
      },
      error: error => this.toastService.showToast('Practitioner with that full name doesn\'t exist in selected organization!', {header:'Finding practitioner', className: 'bg-danger text-light'})
    }

    );
  }

  assignPractitioner(practitioner: Practitioner){
    if(practitioner.qualification != 'Doctor of Medicine'){
      this.toastService.showToast('Practitioner is not qualified as Doctor of Medicine!', {header:'Finding practitioner', className: 'bg-danger text-light'})
      return;
    }
    this.patient.practitioner = practitioner;
    this.toastService.showToast('Practitioner found successfully!', {header:'Finding practitioner', className: 'bg-success text-light'})
    console.log(this.patient.practitioner);
  }

}

