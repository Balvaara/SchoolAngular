import { environment } from './../../environments/environment';
import { User } from './../modules/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user:User;
  constructor(private HttpClient: HttpClient) { }

  Isersion(user){
    return this.HttpClient.post<any>(`${environment.myApi}/api/user`,user);
  }

  getAllUsers(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/listerUsers`);
  }
  getEtat(id:number){
    return this.HttpClient.get(`${environment.myApi}/api/users/status/${id}`);
  }
  suppression(id:number){
    return this.HttpClient.delete(`${environment.myApi}/api/delete/${id}`);
  }
  edite(id:number){
    return this.HttpClient.get<any>(`${environment.myApi}/api/users/id/${id}`);
  }
  modifier(id:number,data){
    return this.HttpClient.put<any>(`${environment.myApi}/api/edite/${id}`,JSON.stringify(data));

  }
  editeProfil(id:number,data){
    return this.HttpClient.put<any>(`${environment.myApi}/api/editeprofil/${id}`,JSON.stringify(data));
  }

  UserCon(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/userCon`);

  }
}
