import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';

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
  @Output()
  nouvelAssignmentAjoute = new EventEmitter<Assignment>();

  // Pour le formulaire d'ajout d'assignment
  nomDevoir = '';
  dateDeRendu!: string;

  constructor(private assignmentService: AssignmentsService) {}

  onSubmit(event:any) {
    console.log("Formulaire soumis ! NOM =  " + this.nomDevoir);
    console.log("Date : " + this.dateDeRendu);

    let nouvelAssignment = new Assignment();
    nouvelAssignment.nom = this.nomDevoir;
    nouvelAssignment.dateDeRendu = new Date(this.dateDeRendu);
    nouvelAssignment.rendu = false;

    // et on le rajoute au tableau des assignments
    //this.assignments.push(nouvelAssignment);

    // On envoie le nouvel assignment sous la forme d'un
    // événement "nouvelAssignment" à notre component parent
    this.nouvelAssignmentAjoute.emit(nouvelAssignment);

    //this.assignmentService.addAssignment(nouvelAssignment);
  }
}
