import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[] = [];
  constructor(private http:HttpClient) { }

  URI = "http://localhost:8010/api/assignments";

  getAssignments():Observable<Assignment[]> {
    // on renvoie les assignements.

      //return of(this.assignments);
      return this.http.get<Assignment[]>(this.URI);
  }

  // renvoie un assignment en fonction de son id
  getAssignment(id:number):Observable<Assignment|undefined> {
    // on cherche dans la liste des assignments
    // l'assignment ayant l'id passé en paramètre
    return this.http.get<Assignment>(this.URI + "/" + id);
  }

  addAssignment(assignment:Assignment):Observable<string> {
    // ici on fait l'ajout dans la base de données... demain on utilisera
    // une vraie base de données et un vrai web service !
    //this.assignments.push(assignment);

    //return of("Assignment ajouté !");
    return this.http.post<string>(this.URI, assignment);
  }

  updateAssignment(assignment:Assignment):Observable<string> {
    // ici on fait la modification sans la base de données... demain on utilisera
    // une vraie base de données et un vrai web service !

    // on ne fait rien et ça marche quand même ? Pourquoi ?

    //return of("Assignment modifié !");
    return this.http.put<string>(this.URI, assignment);
  }

  deleteAssignment(assignment:Assignment):Observable<string> {
    // suppression dans le tableau
    return this.http.delete<string>(this.URI + "/" + assignment._id);
  }
}
