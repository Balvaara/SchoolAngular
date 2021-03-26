import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payement } from '../modules/payement';

@Injectable({
  providedIn: 'root'
})
export class PayementService {
payement:Payement
  constructor(private HttpClient: HttpClient) { }

  getMois(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/mois`);
  }

  MyMatricule(matriculeEleve){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/eleves?matriculeEleve=${matriculeEleve}`);
  }
  Isersion(payement){
    return this.HttpClient.post<any>(`${environment.myApi}/api/ajout_payement`,payement);
  }
  getPayMois(id){
    return this.HttpClient.get<any>(`${environment.myApi}/api/get_pay/${id}`);
  }
  getPayEl(matriculeEleve){
    return this.HttpClient.get<any>(`${environment.myApi}/api/get_pay_by_mat/${matriculeEleve}`);
  }
}
