import { Component, OnInit } from '@angular/core';
import { Examination } from '../../../../models/examination';
import { ExaminationPractitioner } from '../../../../models/examination-practitioner';
import { ServiceType } from '../../../../models/service-type';
import { Practitioner } from '../../../../models/practitioner';
import { HttpExaminationService } from '../../../../core/services/http-examination-service';
import { HttpServiceTypeService } from '../../../../core/services/http-service-type-service';
import { HttpOrganizationService } from '../../../../core/services/http-organization-service';
import { HttpPractitionerService } from '../../../../core/services/http-practitioner-service';
import { HttpPatientService } from '../../../../core/services/http-patient-service';
import { HttpExaminationPractitionerService } from '../../../../core/services/http-examination-practitioner-service';
import { ToastService } from '../../../../core/services/toast-service';
import { Router } from '@angular/router';
import { Patient } from '../../../../models/patient';
import { Organization } from '../../../../models/organization';

@Component({
  selector: 'app-examination-add',
  standalone: false,
  templateUrl: './examination-add.html',
  styleUrl: './examination-add.css',
})
export class ExaminationAdd implements OnInit {

  examination: Examination = {} as Examination;
  examinationPractitioner: ExaminationPractitioner = {} as ExaminationPractitioner;
  patientNameSurname : string = '';
  practitionerNameSurname : string = '';
  serviceTypes?: ServiceType[];
  practitioners?: Practitioner[] = [];
  practitionersListDisplay: string = ''; //string for list of practitioners on form


  constructor(private httpExamination: HttpExaminationService, private httpServiceType: HttpServiceTypeService,
    private httpOrganization: HttpOrganizationService, private httpPractitioner: HttpPractitionerService,
    private httpPatient: HttpPatientService, private httpExamPract: HttpExaminationPractitionerService,
    private toastService: ToastService, private router: Router) { }

  ngOnInit(): void {
    this.examination.patient = {} as Patient;
    this.examination.organization = {} as Organization;
    this.examination.serviceType = {} as ServiceType;
    this.fetchServiceTypes();
  }

  fetchServiceTypes(){
    this.httpServiceType.getAll().subscribe(serviceTypes => this.serviceTypes = serviceTypes);
  }

  findPatientClick(){
    var nameSurnameSplit = this.patientNameSurname.split (" ");
    this.httpPatient.getPatientByFullName(nameSurnameSplit[0], nameSurnameSplit[1]).subscribe({
      next: patient => {
        this.assignPatient(patient)
      },
      error: error => this.toastService.showToast('Patient with that full name doesn\'t exist!', {header:'Finding patient', className: 'bg-danger text-light'})
    }
    );
  }

  assignPatient(patient: Patient){
    if(patient.deceased == true){
      this.toastService.showToast('Patient is deceased!', {header:'Finding patient', className: 'bg-danger text-light'})
      return;
    }
    this.examination.patient = patient;
    this.examination.organization = patient.organization; //assign patients default organization
    if(patient.practitioner.name != null){
      this.practitionerNameSurname = patient.practitioner.name + " " + patient.practitioner.surname; //show default practitioner's full name on form
    }
    this.toastService.showToast('Patient found successfully!', {header:'Finding patient', className: 'bg-success text-light'})
  }

  findOrganizationClick(){
    console.log(this.examination.organization);
    this.httpOrganization.getOrganizationByName(String(this.examination.organization.name)).subscribe({
      next: organization => {
        this.assignOrganization(organization)
      },
      error: error => this.toastService.showToast('Organization with that name doesn\'t exist!', {header:'Finding organization', className: 'bg-danger text-light'})

    }
    );
  }

  assignOrganization(organization: Organization){
    this.examination.organization = organization;
    this.practitioners = [];
    this.practitionersListDisplay = '';
    this.toastService.showToast('Organization found successfully!', {header:'Finding organization', className: 'bg-success text-light'})
    console.log(this.examination.organization);
  }

  findPractitionerClick(){
    var nameSurnameSplit = this.practitionerNameSurname.split (" ");
    console.log(nameSurnameSplit[0], nameSurnameSplit[1]);
    this.httpPractitioner.getPractitionerByFullNameAndOrg(nameSurnameSplit[0], nameSurnameSplit[1], this.examination.organization.id).subscribe({
      next: practitioner => {
        this.checkIfAdded(practitioner)
      },
      error: error => this.toastService.showToast('Practitioner with that full name doesn\'t exist in selected organization!', {header:'Finding practitioner', className: 'bg-danger text-light'})
    }

    );
  }

  checkIfAdded(practitioner: Practitioner){ //checks if practitioner is already in list
    for(let i = 0; i < this.practitioners!.length; i++){
      if(this.practitioners![i].id == practitioner.id){
        this.toastService.showToast('Practitioner ' + practitioner.name + ' ' + practitioner.surname + ' is already added!',
        {header:'Finding practitioner', className: 'bg-danger text-light'});
        return;
      }
    }
   this.assignPractitioner(practitioner);
  }

  assignPractitioner(practitioner: Practitioner){
    this.toastService.showToast('Practitioner found successfully!', {header:'Finding practitioner', className: 'bg-success text-light'});
    this.practitioners?.push(practitioner);
    this.practitionersListDisplay += this.practitioners?.[this.practitioners.length - 1].name + ' ' +
    this.practitioners?.[this.practitioners.length - 1].surname + ' - '
    + this.practitioners?.[this.practitioners.length - 1].qualification + '\n';
    console.log(this.practitionersListDisplay);
    console.log(this.practitioners);
  }

  deleteFromList(){
    var nameSurnameSplit = this.practitionerNameSurname.split (" ");
    console.log(nameSurnameSplit[0], nameSurnameSplit[1]);
    for(let i = 0; i < this.practitioners!.length; i++){
      if(this.practitioners![i].name === nameSurnameSplit[0] && this.practitioners![i].surname === nameSurnameSplit[1]){
        this.practitioners?.splice(i, 1);
        this.reloadPractitionerListDisplay();
        return;
      }
    }
    this.toastService.showToast('Practitioner ' + nameSurnameSplit[0] + ' ' + nameSurnameSplit[1] + ' is not in list!',
        {header:'Deleting practitioner', className: 'bg-danger text-light'})
  }

  reloadPractitionerListDisplay(){ //used so that removed practitioner is no longer displayed
    this.practitionersListDisplay = '';
    for(let i = 0; i < this.practitioners!.length; i++){
      this.practitionersListDisplay += this.practitioners?.[i].name + ' ' +
      this.practitioners?.[i].surname + ' - ' + this.practitioners?.[i].qualification + '\n';
    }
  }

  saveExamination(){
    console.log('SE: ', this.examination);
    if(this.practitioners?.length == 0){
      this.toastService.showToast('Practitioners are required!', {header:'Saving examination', className: 'bg-danger text-light'});
      return;
    }
    if(this.examination.organization.name == null){
      this.toastService.showToast('Organization is required!', {header:'Saving examination', className: 'bg-danger text-light'});
      return;
    }
    if(this.examination.serviceType.id == null){
      this.toastService.showToast('Service type is required!', {header:'Saving examination', className: 'bg-danger text-light'});
      return;
    }
    if(this.examination.startDate != null && this.examination.endDate != null
      && this.examination.endDate < this.examination.startDate){
        this.toastService.showToast('End date can\'t be before start date!', {header:'Saving examination', className: 'bg-danger text-light'});
      return;
    }
     this.httpExamination.saveExamination(this.examination).subscribe({
      next: res => {
        this.checkIfExaminationIsSaved(res)
      },
      error: error => this.toastService.showToast('Examination not saved: Examination with that identifier already exists!', {header:'Saving examination', className: 'bg-danger text-light'})
    }
    );
  }

  checkIfExaminationIsSaved(res: Examination){
    if(res.hasOwnProperty('id')){
      this.examination.id = res.id;
      this.examinationPractitioner.examination = this.examination;
      this.saveExaminationPractitioners();
    } else{
      this.toastService.showToast('Examination not saved: ' + this.getMessage(res), {header:'Saving examination', className: 'bg-danger text-light'});
    }
  }

  getMessage(res : Examination){
    if(res.hasOwnProperty('identifier')){
      return res.identifier;
    }
    return res.status;
  }

  saveExaminationPractitioners(){
    for(let i = 0; i < this.practitioners!.length; i++){
      this.examinationPractitioner.practitioner = this.practitioners![i];
      this.httpExamPract.saveExaminationPractitioner(this.examinationPractitioner).subscribe(res => console.log(res));
    }
    this.toastService.showToast('Examination saved successfully!', {header:'Saving examination', className: 'bg-success text-light'});
    this.router.navigate(['/examination']);
  }

}
