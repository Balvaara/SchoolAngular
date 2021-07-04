import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IscriptionService {

  constructor(private HttpClient: HttpClient) { }

  MyInscription(numIns){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/getIns/${numIns}`);
  }

  IsersionNovEl(eleve){
    return this.HttpClient.post<any>(`${environment.myApi}/api/ajouteleve`,eleve);
  }

  IsersionEncEl(eleve){
    return this.HttpClient.post<any>(`${environment.myApi}/api/ajouteleve_encien`,eleve);
  }

  getAllIns(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/listIns`);
  }
  getAllEl(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/listeEleve`);
  }
  getTuteur(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/parrents`);
  }

  edite(id:number){
    return this.HttpClient.get<any>(`${environment.myApi}/api/parrents/${id}`);
  }

  editeIn(id:number){
    return this.HttpClient.get<any>(`${environment.myApi}/api/inscrires/${id}`);
  }
  editeEl(id:number){
    return this.HttpClient.get<any>(`${environment.myApi}/api/eleves/${id}`);
  }
  modifierEl(id:number,data){
    return this.HttpClient.put<any>(`${environment.myApi}/api/updateeleve/${id}`,JSON.stringify(data));
  }

  modifierIns(id:number,data){
    return this.HttpClient.put<any>(`${environment.myApi}/api/updatins/${id}`,JSON.stringify(data));
  }
  suppression(id:number){
    return this.HttpClient.delete(`${environment.myApi}/api/supprimeeleve/${id}`);
  }
  
}
