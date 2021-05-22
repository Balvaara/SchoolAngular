import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfService {

  constructor(private HttpClient:HttpClient) { }
  Isersion(profs){
    return this.HttpClient.post<any>(`${environment.myApi}/api/addProf`,profs);
  }
  getProf(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/listeProfesseur`);
  }
}
