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
}
