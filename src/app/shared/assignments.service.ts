import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[] = [
    {
      nom:"Devoir Angular de Mr Buffa",
      dateDeRendu: new Date("2024-02-17"),
      rendu: false
    },
    {
      nom:"Devoir J2EE de Mr Grin",
      dateDeRendu: new Date("2024-12-15"),
      rendu: true
    },
    {
      nom:"Devoir J2EE de Mr Winter, gestion de projet",
      dateDeRendu: new Date("2024-11-10"),
      rendu: true
    }
  ];
  constructor() { }

  getAssignments():Observable<Assignment[]> {
    // on renvoie les assignements. Demain on utilisera
    // une vraie base de données et un vrai web service !
      return of(this.assignments);
  }

  addAssignment(assignment:Assignment):Observable<string> {
    // ici on fait l'ajout dans la base de données... demain on utilisera
    // une vraie base de données et un vrai web service !
    this.assignments.push(assignment);

    return of("Assignment ajouté !");
  }

  updateAssignment(assignment:Assignment):Observable<string> {
    // ici on fait la modification sans la base de données... demain on utilisera
    // une vraie base de données et un vrai web service !

    // on ne fait rien et ça marche quand même ? Pourquoi ?

    return of("Assignment modifié !");
  }

  deleteAssignment(assignment:Assignment):Observable<string> {
    // suppression dans le tableau
    const index = this.assignments.indexOf(assignment, 0);
    this.assignments.splice(index, 1);
    
    return of("Assignment supprimé !");
  }
}
