import { Component, Input } from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent {
  @Input()
  assignmentTransmis!:Assignment
}
