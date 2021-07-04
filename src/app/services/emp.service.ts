import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private HttpClient: HttpClient) { }

  getMat(classes){
    return this.HttpClient.get<any>(`${environment.myApi}/api/cherche_mats/${classes}`);
  }
  getPrfByMat(mats){
    return this.HttpClient.get<any>(`${environment.myApi}/api/ProfByMat/${mats}`);
  }

  Isersion(emplois){
    return this.HttpClient.post<any>(`${environment.myApi}/api/addEmp`,emplois);
  }
  getEmp(classe,session){
    return this.HttpClient.get<any>(`${environment.myApi}/api/consulterEmp/${classe},${session}`);
  }
  
}
