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
}
