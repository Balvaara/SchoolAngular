import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {

  constructor(private HttpClient:HttpClient) { }

  Isersion(niveau){
    return this.HttpClient.post<any>(`${environment.myApi}/api/addNiveau`,niveau);
  }

  getNiv(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/niveaux`);
  }
  getAllNiv(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/listeNiveau`);
  }
  modifier(id:number,data){
    return this.HttpClient.put<any>(`${environment.myApi}/api/editeNiveau/${id}`,JSON.stringify(data));
  }
  edite(id:number){
    return this.HttpClient.get<any>(`${environment.myApi}/api/niveaux/${id}`);
  }
  suppression(id:number){
    return this.HttpClient.delete(`${environment.myApi}/api/deleteNiveau/${id}`);
  }
}
