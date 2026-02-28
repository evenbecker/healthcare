import { Component, OnInit } from '@angular/core';
import { Organization } from '../../../../models/organization';
import { OrganizationType } from '../../../../models/organization-type';
import { HttpOrganizationService } from '../../../../core/services/http-organization-service';
import { HttpOrganizationTypeService } from '../../../../core/services/http-organization-type-service';
import { Router } from '@angular/router';
import { ToastService } from '../../../../core/services/toast-service';

@Component({
  selector: 'app-organization-add',
  standalone: false,
  templateUrl: './organization-add.html',
  styleUrl: './organization-add.css',
})
export class OrganizationAdd implements OnInit {

  organization: Organization = {} as Organization;
  orgTypes?: OrganizationType[];

  constructor(private httpOrganization: HttpOrganizationService, private httpOrgType: HttpOrganizationTypeService, private router: Router, private toastService: ToastService) { }

  ngOnInit(): void {
    this.organization.organizationType = {} as OrganizationType;
    this.httpOrgType.getAll().subscribe(orgTypes => this.orgTypes = orgTypes);
  }

  saveOrganization(){
    this.organization.active = true;
    this.organization.id = 0;
    console.log('ORGTAHP:', this.organization.organizationType);
    if(this.organization.organizationType.id == null){
      this.toastService.showToast('Organization not saved: Organization type is required!', {header:'Saving organization', className: 'bg-danger text-light'});
      return;
    }
    console.log(this.organization.organizationType);
    this.httpOrganization.saveOrganization(this.organization).subscribe(
      {
        next: res => {
          this.checkIfOrganizationIsSaved(res);
        },
        error: error => this.toastService.showToast('Organization not saved: Organization with that identifier or name already exists!', {header:'Saving organization', className: 'bg-danger text-light'})
      }
    );

  }

  checkIfOrganizationIsSaved(res: Organization){
    if(res.hasOwnProperty('id')){
      this.toastService.showToast('Organization saved successfully!', {header:'Saving organization', className: 'bg-success text-light'});
      this.router.navigate(['/organization']);
    } else{
      this.toastService.showToast('Organization not saved: ' + this.getMessage(res), {header:'Saving organization', className: 'bg-danger text-light'});
    }
  }

  getMessage(res : Organization){
    if(res.hasOwnProperty('name')){
      return res.name;
    }
    return res.email;
  }


}

