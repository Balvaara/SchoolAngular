import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClasseMatService {

  constructor(private HttpClient:HttpClient) { }
  Isersion(matiere){
    return this.HttpClient.post<any>(`${environment.myApi}/api/addClMatiere`,matiere);
  }
  getMatiereClasse(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/listeClMatiere`);
  }

  suppression(id:number){
    return this.HttpClient.delete(`${environment.myApi}/api/deleteClMatiere/${id}`);
  }
  edite(id:number){
    return this.HttpClient.get<any>(`${environment.myApi}/api/classe_matieres/${id}`);
  }

  modifier(id:number,data){
    return this.HttpClient.put<any>(`${environment.myApi}/api/editeClMatiere/${id}`,JSON.stringify(data));

  }
}
