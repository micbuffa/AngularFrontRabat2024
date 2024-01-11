import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RenduDirective } from '../shared/rendu.directive';
import { NonRenduDirective } from '../shared/non-rendu.directive';
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from '@angular/material/button';
import { Assignment } from './assignment.model';
import { AssignmentDetailComponent } from "./assignment-detail/assignment-detail.component";
import { MatDividerModule } from '@angular/material/divider';

import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
    selector: 'app-assignments',
    standalone: true,
    templateUrl: './assignments.component.html',
    styleUrl: './assignments.component.css',
    imports: [CommonModule, RenduDirective, NonRenduDirective,
             AssignmentDetailComponent, MatListModule, MatDividerModule,
             AddAssignmentComponent, MatButtonModule]
})
export class AssignmentsComponent implements OnInit {
  ajoutActive = false;
  // Pour afficher ou pas le formulaire
  formVisible = false;

  // Pour le click sur un assignment
  assignmentSelectionne!:Assignment;
  // tableau des assignments qu'on va remplir via le service
  assignments:Assignment[] = [];

  constructor(private assignmentService:AssignmentsService) {}

  ngOnInit(): void {
    console.log("COMPOSANT AFFICHE !");
    // on va utiliser le service pour recuperer les assignments
    // et les afficher dans la page
    this.assignmentService.getAssignments()
    .subscribe(assignments => {
      this.assignments = assignments;
    });
  }

  getColor(assignment:any) {
    if(assignment.rendu) return "green"
    else return "red"
  }

  assignmentClique(a:Assignment) {
    console.log("Assignment cliqué : " + a.nom);
    this.assignmentSelectionne = a;
  }

  onAddAssignmentBtnClick() {
    this.formVisible = true;
  }

  onAddAssignmentClique(event:Assignment) {
    console.log("Nouvel assignment reçu du fils!");

    //this.assignments.push(event);
    this.assignmentService.addAssignment(event)
    .subscribe(message => {
      console.log(message);
      this.formVisible = false;
    });

  }

  onAssignmentSupprime(event:Assignment) {
    console.log("Reçu du fils: Assignment à supprimer : " + event.nom);
    // Il faut trouver position de cet assignment dans le tableau
    const pos = this.assignments.indexOf(event, 0);
    // On utilise la méthode standard JavaScript splice pour supprimer
    // un élément du tableau à partir de son index et on supprime un seul
    // élément du tableau (premier paramètre = la position,
    // second = le nombre d'éléments à supprimer)
    //this.assignments.splice(pos, 1);

    this.assignmentService.deleteAssignment(event);
  }
}
