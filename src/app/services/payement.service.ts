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


  MyMatricule(mat){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/eleveseMat/${mat}`);
  }
  MyIns(mat,session){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/getElIns/${mat},${session}`);
  }
  Isersion(payement){
    return this.HttpClient.post<any>(`${environment.myApi}/api/ajout_payement`,payement);
  }
  getPayMois(id,nb){
    return this.HttpClient.get<any>(`${environment.myApi}/api/get_pay/${id},${nb}`);
  }
  getPayEl(matriculeEleve,id){
    return this.HttpClient.get<any>(`${environment.myApi}/api/get_pay_by_mat/${matriculeEleve},${id}`);
  }

  getSession(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/annee_acads`);
  }
  

  getClasse(ses,mat){
    return this.HttpClient.get<any>(`${environment.myApi}/api/getClasse/${ses},${mat}`);
  }
  getSems(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/semestres`);
  }
  getType(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/type_notes`);
  }
  getMatCl(cl:any){
    return this.HttpClient.get<any>(`${environment.myApi}/api/cherche_mats/${cl}`);
  } 

  RecuPay(id:number){
    return this.HttpClient.get<any>(`${environment.myApi}/api/payements/${id}`);
  }
}
