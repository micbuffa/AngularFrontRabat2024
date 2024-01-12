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
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-assignments',
    standalone: true,
    templateUrl: './assignments.component.html',
    styleUrl: './assignments.component.css',
    imports: [CommonModule, RenduDirective, NonRenduDirective,
             AssignmentDetailComponent, MatListModule, MatDividerModule,
             AddAssignmentComponent, MatButtonModule,
            RouterLink]
})
export class AssignmentsComponent implements OnInit {
  // tableau des assignments qu'on va remplir via le service
  assignments:Assignment[] = [];
  page:number = 1;
  limit:number = 10;
  totalDocs:number = 0;
  totalPages:number = 0;
  hasPrevPage:boolean = false;
  hasNextPage:boolean = false;
  nextPage:number = 0;
  prevPage:number = 0;

  constructor(private assignmentService:AssignmentsService) {}

  ngOnInit(): void {
    console.log("COMPOSANT AFFICHE !");
    this.getAssignments();
  }

  getAssignments() {
    // on va utiliser le service pour recuperer les assignments
    // et les afficher dans la page
    this.assignmentService.getAssignmentsPagine(this.page, this.limit)
    .subscribe(data => {
      this.assignments = data.docs;
      this.totalDocs = data.totalDocs;
      this.totalPages = data.totalPages;
      this.hasPrevPage = data.hasPrevPage;
      this.hasNextPage = data.hasNextPage;
      this.nextPage = data.nextPage;
      this.prevPage = data.prevPage;
    });
  }
  getColor(assignment:any) {
    if(assignment.rendu) return "green"
    else return "red"
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

  pageSuivante() {
    this.page++;
    this.getAssignments();
  }

  pagePrecedente() {
    this.page--;
    this.getAssignments();
  }


}
