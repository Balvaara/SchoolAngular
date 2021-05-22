import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  constructor(private HttpClient:HttpClient) { }
  Isersion(matiere){
    return this.HttpClient.post<any>(`${environment.myApi}/api/addMatiere`,matiere);
  }
  getMatiere(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/matieres`);
  }
}
