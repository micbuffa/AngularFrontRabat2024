import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatCheckboxModule, MatButtonModule,
    MatIconModule],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent {
  @Input()
  assignmentTransmis?:Assignment;
  @Output()
  assignmentSupprime = new EventEmitter<Assignment>();

  onDeleteAssignment() {
    // On envoie un evenement au père (assignments.component.ts)
    this.assignmentSupprime.emit(this.assignmentTransmis);
    // Pour effacer de la page la mat-card avec le détail
    // de l'assignment
    this.assignmentTransmis = undefined;
  }
}
