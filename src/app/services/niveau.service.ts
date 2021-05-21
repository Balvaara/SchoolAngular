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
}
