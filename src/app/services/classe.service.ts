import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(private HttpClient:HttpClient) { }
  Isersion(classe){
    return this.HttpClient.post<any>(`${environment.myApi}/api/addclasse`,classe);
  }
  getClasse(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/classes`);
  }
  getAllClasse(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/listeClasse`);
  }
  modifier(id:number,data){
    return this.HttpClient.put<any>(`${environment.myApi}/api/editeClasse/${id}`,JSON.stringify(data));
  }
  edite(id:number){
    return this.HttpClient.get<any>(`${environment.myApi}/api/classes/${id}`);
  }
  suppression(id:number){
    return this.HttpClient.delete(`${environment.myApi}/api/deleteClasse/${id}`);
  }
}

  

