import { Component, Input } from '@angular/core';
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
  assignmentTransmis!:Assignment
}
