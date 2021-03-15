import { environment } from './../../environments/environment';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modules/user';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
// import { Role } from '../modules/role';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  private currentUserSubject: BehaviorSubject<User>;

  constructor(private HttpClient:HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  }
  
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}
login(username, password) {
  return this.HttpClient.post<any>(`${environment.myApi}/login_check`, { username, password })
      .pipe(map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
      }));
      
}

  // getRoles(){
  //   return this.HttpClient.get(`${environment.myApi}/api/listerRoles`);
  // }

  // getRolePart(){
  //   return this.HttpClient.get(`${environment.myApi}/api/listerRolesPart`);
  // }
  logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  
}