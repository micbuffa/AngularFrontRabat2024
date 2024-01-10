import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RenduDirective } from '../shared/rendu.directive';
import { NonRenduDirective } from '../shared/non-rendu.directive';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule, RenduDirective, NonRenduDirective,
    FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule,
    MatDatepickerModule, MatNativeDateModule],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent implements OnInit {
  ajoutActive = false;
  // Pour le formulaire d'ajout d'assignment
  nomDevoir = "";
  dateDeRendu!:string;

  assignments = [
    {
      nom:"Devoir Angular de Mr Buffa",
      dateDeRendu: "2024-02-17",
      rendu: false
    },
    {
      nom:"Devoir J2EE de Mr Grin",
      dateDeRendu: "2024-12-15",
      rendu: true
    },
    {
      nom:"Devoir J2EE de Mr Winter, gestion de projet",
      dateDeRendu: "2024-11-10",
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

  onSubmit(event:any) {

    console.log("Formulaire soumis ! NOM =  " + this.nomDevoir);
    console.log("Date : " + this.dateDeRendu);

    let nouvelAssignment = {
      nom: this.nomDevoir,
      dateDeRendu: this.dateDeRendu,
      rendu: false
    };

    // et on le rajoute au tableau des assignments
    this.assignments.push(nouvelAssignment);
  }
}
