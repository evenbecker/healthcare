import { Component, OnInit } from '@angular/core';
import { Examination } from '../../../../models/examination';
import { HttpExaminationService } from '../../../../core/services/http-examination-service';
import { ActivatedRoute } from '@angular/router';
import { Organization } from '../../../../models/organization';
import { Patient } from '../../../../models/patient';
import { firstValueFrom } from 'rxjs';
import { ExaminationPractitioner } from '../../../../models/examination-practitioner';
import { HttpExaminationPractitionerService } from '../../../../core/services/http-examination-practitioner-service';

@Component({
  selector: 'app-examination-details',
  standalone: false,
  templateUrl: './examination-details.html',
  styleUrl: './examination-details.css',
})
export class ExaminationDetails implements OnInit {
  examination: Examination = {} as Examination;
  practitioners: string = '';

  constructor(private httpExamination: HttpExaminationService, private httpExamPract: HttpExaminationPractitionerService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    console.log('id', id);
    this.examination.organization = {} as Organization;
    this.examination.patient = {} as Patient;
    this.fetchExaminationAndPractitioners(id);
  }

  async fetchExaminationAndPractitioners(id: number){
    this.examination = await firstValueFrom(this.httpExamination.getExamination(id));
    this.httpExamPract.getExamPractByExamId(this.examination.id).subscribe(res => this.displayPractitioners(res));
    this.setMissingValues();
  }

  displayPractitioners(res : ExaminationPractitioner[]){
    for(let i = 0; i < res.length; i++){
      this.practitioners += res[i].practitioner.name + ' ' + res[i].practitioner.surname + ' - '
      + res[i].practitioner.qualification +  '\n' ;
    }
  }

  setMissingValues(){
    if(this.examination.identifier == null || this.examination.identifier == ''){
      this.examination.identifier = 'N/A';
    }
    if(this.examination.priority == null || this.examination.priority == ''){
      this.examination.priority = 'N/A';
    }
    if(this.examination.diagnosis == null || this.examination.diagnosis == ''){
      this.examination.diagnosis = 'N/A';
    }
  }

}

