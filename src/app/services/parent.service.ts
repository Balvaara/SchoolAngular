import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private HttpClient: HttpClient) { }

  Titeur(telp){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/parrents?telp=${telp}`);
  }
  modifier(id:number,data){
    return this.HttpClient.put<any>(`${environment.myApi}/api/modifparrent/${id}`,JSON.stringify(data));
  }
}
