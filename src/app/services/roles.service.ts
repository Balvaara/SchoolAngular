import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private HttpClient: HttpClient) { }

  getRoles(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/listerRoles`);
  }
}
