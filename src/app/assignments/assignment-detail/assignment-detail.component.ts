import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Assignment } from '../assignment.model';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AssignmentsService } from '../../shared/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatCheckboxModule, MatButtonModule,
    MatIconModule],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent implements OnInit {
  assignmentTransmis?: Assignment;
  @Output()
  assignmentSupprime = new EventEmitter<Assignment>();

  constructor(private assignmentService: AssignmentsService,
              private route: ActivatedRoute,
              private router:Router) {}

  ngOnInit(): void {
    console.log("Dans le ngOnInit de assignment-detail")
    // Je récupère l'id dans l'URL, le + permet de caster en number
    const id:number = +this.route.snapshot.params['id'];
    console.log("Dans le ngOnInit de assignment-detail, id = " + id);

    // On appelle le service pour récupérer l'assignment avec cet id
    this.assignmentService.getAssignment(id)
      .subscribe(assignment => {
        this.assignmentTransmis = assignment;
      });

  }

  onDeleteAssignment() {
   // On demande au service de supprimer l'assignment courant
    this.assignmentService.deleteAssignment(this.assignmentTransmis!)
    .subscribe(message => {
      console.log(message);
      // On cache le détail de l'assignment qu'on vient de supprimer
      this.assignmentTransmis = undefined;

      // On navigue vers la page d'accueil par programmmation
      // avec la méthode navigate de l'objet Router
      this.router.navigate(['/home']);
    });
  }

  onCheckboxCliqued() {
    if(!this.assignmentTransmis) return;

    this.assignmentTransmis.rendu = true;
    this.assignmentService.updateAssignment(this.assignmentTransmis)
      .subscribe(message => {
        console.log(message);
      });
  }
}
