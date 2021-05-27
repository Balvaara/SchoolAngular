import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IscriptionService {

  constructor(private HttpClient: HttpClient) { }

  MyInscription(numIns){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/inscrires?numIns=${numIns}`);
  }

  IsersionNovEl(eleve){
    return this.HttpClient.post<any>(`${environment.myApi}/api/ajouteleve`,eleve);
  }

  IsersionEncEl(eleve){
    return this.HttpClient.post<any>(`${environment.myApi}/api/ajouteleve_encien`,eleve);
  }
}
