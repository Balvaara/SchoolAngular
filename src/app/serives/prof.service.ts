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

  suppression(id:number){
    return this.HttpClient.delete(`${environment.myApi}/api/deleteProf/${id}`);
  }

  edite(id:number){
    return this.HttpClient.get<any>(`${environment.myApi}/api/professeurs/${id}`);
  }

  modifier(id:number,data){
    return this.HttpClient.put<any>(`${environment.myApi}/api/editeProfesseur/${id}`,JSON.stringify(data));

  }
}
