import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private HttpClient:HttpClient) { }

  Isersion(serie){
    return this.HttpClient.post<any>(`${environment.myApi}/api/addserie`,serie);
  }

  getSerie(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/series`);
  }
  getAllSerie(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/listeSerie`);
  }
  modifier(id:number,data){
    return this.HttpClient.put<any>(`${environment.myApi}/api/editeSerie/${id}`,JSON.stringify(data));
  }
  edite(id:number){
    return this.HttpClient.get<any>(`${environment.myApi}/api/series/${id}`);
  }
  suppression(id:number){
    return this.HttpClient.delete(`${environment.myApi}/api/deleteSerie/${id}`);
  }
}
