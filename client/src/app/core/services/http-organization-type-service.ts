import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrganizationType } from '../../models';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpOrganizationTypeService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<OrganizationType[]> {
    return this.httpClient.get<OrganizationType[]>(`${environment.serverUrl}/organizations/type`);
  }

  getOrgType(id: number) : Observable<OrganizationType>{
    return this.httpClient.get<OrganizationType>(`${environment.serverUrl}/organizations/type/${id}`);
  }
}
