import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-assignment',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css',
})
export class AddAssignmentComponent {

  // Pour le formulaire d'ajout d'assignment
  nomDevoir = '';
  dateDeRendu!: string;

  constructor(private assignmentService: AssignmentsService,
              private router:Router) {}

  onSubmit(event:any) {
    console.log("Formulaire soumis ! NOM =  " + this.nomDevoir);
    console.log("Date : " + this.dateDeRendu);

    let nouvelAssignment = new Assignment();
    // generate a random int as id
    nouvelAssignment.id = Math.floor(Math.random() * 1000000000);
    nouvelAssignment.nom = this.nomDevoir;
    nouvelAssignment.dateDeRendu = new Date(this.dateDeRendu);
    nouvelAssignment.rendu = false;

    // on utilise le service pour ajouter le nouvel assignment
    this.assignmentService.addAssignment(nouvelAssignment)
      .subscribe(message => {
        console.log(message);
        // je navigue de nouveau vers la page d'accueil pour
        // afficher la liste des assignments avec celui que
        // je viens d'ajouter
        this.router.navigate(['/home']);
      });
  }
}
