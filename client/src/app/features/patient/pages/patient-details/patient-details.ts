import { Component, OnInit } from '@angular/core';
import { Patient } from '../../../../models/patient';
import { HttpPatientService } from '../../../../core/services/http-patient-service';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-patient-details',
  standalone: false,
  templateUrl: './patient-details.html',
  styleUrl: './patient-details.css',
})
export class PatientDetails implements OnInit {

  patient?: Patient;

  constructor(private httPpatient : HttpPatientService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    console.log('id', id);
    this.fetchPatient(id);
  }

  async fetchPatient(id: number){
    this.patient = await firstValueFrom(this.httPpatient.getPatient(id));
    this.setMissingValues();
  }

  setMissingValues(){
    if(this.patient?.identifier == null || this.patient?.identifier == ''){
      this.patient!.identifier = 'N/A';
    }
    if(this.patient?.gender == null || this.patient?.gender == ''){
      this.patient!.gender = 'N/A';
    }
    if(this.patient?.maritialStatus == null || this.patient?.maritialStatus == ''){
      this.patient!.maritialStatus = 'N/A';
    }
    if(this.patient?.adress == null || this.patient?.adress == ''){
      this.patient!.adress = 'N/A';
    }
    if(this.patient?.email == null || this.patient?.email == ''){
      this.patient!.email= 'N/A';
    }
    if(this.patient?.phone == null || this.patient?.phone == ''){
      this.patient!.phone = 'N/A';
    }
  }

}

