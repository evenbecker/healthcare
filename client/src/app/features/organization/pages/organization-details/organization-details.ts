import { Component, OnInit } from '@angular/core';
import { Organization } from '../../../../models/organization';
import { HttpOrganizationService } from '../../../../core/services/http-organization-service';
import { HttpExaminationService } from '../../../../core/services/http-examination-service';
import { HttpPractitionerService } from '../../../../core/services/http-practitioner-service';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Practitioner } from '../../../../models/practitioner';

@Component({
  selector: 'app-organization-details',
  standalone: false,
  templateUrl: './organization-details.html',
  styleUrl: './organization-details.css',
})
export class OrganizationDetails implements OnInit {

  organization?: Organization;
  examinationsCount?: number;
  examsInProgressCount?: number;
  practitionersCount?: number;
  practitionersListDisplay = '';

  constructor(private httpOrganization : HttpOrganizationService, private httpExamination: HttpExaminationService,
    private httpPractitioner: HttpPractitionerService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    console.log('id', id);
    this.fetchOrganization(id);
    this.fetchAdditionalData(id);
  }

  async fetchOrganization(id: number){
    this.organization = await firstValueFrom(this.httpOrganization.getOrganization(id));
    this.setMissingValues();
  }

  setMissingValues(){
    console.log(this.organization);
    if(this.organization?.identifier == null || this.organization?.identifier == ''){
      this.organization!.identifier = 'N/A';
    }
    if(this.organization?.adress == null || this.organization?.adress == ''){
      this.organization!.adress = 'N/A';
    }
    if(this.organization?.email == null || this.organization?.email == ''){
      this.organization!.email= 'N/A';
    }
    if(this.organization?.phone == null || this.organization.phone == ''){
      this.organization!.phone = 'N/A';
    }
  }

  fetchAdditionalData(id : number){
    this.httpExamination.getExamCountForOrg(id).subscribe(res => this.examinationsCount = res);
    this.httpExamination.getExamInProgressCountForOrg(id).subscribe(res => this.examsInProgressCount = res);
    this.httpPractitioner.getPractCountForOrg(id).subscribe(res => this.practitionersCount = res);
    this.httpPractitioner.getPractForOrg(id).subscribe(res => this.setPractitionersDisplay(res));
  }

  setPractitionersDisplay(res: Practitioner[]){
    for(let i = 0; i < res.length; i++){
      this.practitionersListDisplay += res[i].name + ' ' +
      res[i].surname + ' - ' + res[i].qualification + '\n' ;
    }
  }

}

