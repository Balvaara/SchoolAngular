import { Note } from './../modules/note';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
note:Note
  constructor(private HttpClient: HttpClient) { }


  Isersion(note){
    return this.HttpClient.post<any>(`${environment.myApi}/api/ajout_note`,note);
  }
  getNoteByMatSesAnn(mat,sems,an){
    return this.HttpClient.get<any>(`${environment.myApi}/api/consulterNoteSemEleve/${mat},${sems},${an}`);
  }
  editeNote(id:number){
    return this.HttpClient.get<any>(`${environment.myApi}/api/notes/${id}`);
  }

  modifier(id:number,data){
    return this.HttpClient.put<any>(`${environment.myApi}/api/edite_Note/${id}`,JSON.stringify(data));
  }

  getMoy(mat,sems,an){
    return this.HttpClient.get<any>(`${environment.myApi}/api/consulterNoteSemEleve/${mat},${sems},${an}`);
  }

  getMoyAnnuelle(mat,sems,an){
    return this.HttpClient.get<any>(`${environment.myApi}/api/CalculeMoyenne/${mat},${sems},${an}`);
  }
}
