import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticService {

  constructor(private HttpClient: HttpClient) { }
  getNbClasse(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/nbClasse`);
  }
  getNbEleve(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/nbEleve`);
  }
  getNbNiv(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/nbNiv`);
  }
  getNbSerie(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/nbSerie`);
  }
  getNbMat(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/nbMat`);
  }
  getBud(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/somme`);
  }
  getNbUser(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/usersCompt`);
  }
  getNbProf(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/profs`);
  }
  getNbRole(){
    return this.HttpClient.get<any>(`${environment.myApi}/api/rolesCompte`);
  }
}
