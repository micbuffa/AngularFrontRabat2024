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

  ngOnInit(): void {
    console.log("COMPOSANT AFFICHE !");
    // on active le bouton d'ajout au bout de 3 secondes
    setTimeout(() => {
      this.ajoutActive = true;
    }, 3000)
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

    this.assignments.push(event);
    this.formVisible = false;
  }
}
