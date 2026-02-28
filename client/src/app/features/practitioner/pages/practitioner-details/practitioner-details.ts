import { Component, OnInit } from '@angular/core';
import { Practitioner } from '../../../../models/practitioner';
import { HttpPractitionerService } from '../../../../core/services/http-practitioner-service';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-practitioner-details',
  standalone: false,
  templateUrl: './practitioner-details.html',
  styleUrl: './practitioner-details.css',
})
export class PractitionerDetails implements OnInit {

  practitioner?: Practitioner;

  constructor(private httpPractitioner : HttpPractitionerService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    console.log('id', id);
    this.fetchPractitioner(id);
  }

  async fetchPractitioner(id: number){
    this.practitioner = await firstValueFrom(this.httpPractitioner.getPractitioner(id));
    this.setMissingValues();
  }

  setMissingValues(){
    if(this.practitioner?.identifier == null || this.practitioner?.identifier == ''){
      this.practitioner!.identifier = 'N/A';
    }
    if(this.practitioner?.gender == null || this.practitioner?.gender == ''){
      this.practitioner!.gender = 'N/A';
    }
    if(this.practitioner?.adress == null || this.practitioner?.adress == ''){
      this.practitioner!.adress = 'N/A';
    }
    if(this.practitioner?.email == null || this.practitioner?.email == ''){
      this.practitioner!.email= 'N/A';
    }
    if(this.practitioner?.phone == null || this.practitioner?.phone == ''){
      this.practitioner!.phone = 'N/A';
    }
  }

}

