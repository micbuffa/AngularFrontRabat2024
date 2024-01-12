import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { AssignmentsComponent } from './assignments/assignments.component';
import { RouterLink } from '@angular/router';
import { AssignmentsService } from './shared/assignments.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
            MatButtonModule, MatDividerModule, MatIconModule,
            AssignmentsComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  titre = "Application de gestion des devoirs  "
  constructor(private assignmentsService: AssignmentsService,
              private router: Router) {
    console.log('AppComponent constructor');
  }

  remplirLaBDAvecDonneesDeTest() {
    this.assignmentsService.peuplerBDavecForkJoin()
    .subscribe(() => {
      console.log("BD remplie, les 1000 données ont été ajoutées  !")
      // on navigue vers la page d'accueil et ça devrait re-afficher les données
      this.router.navigate(["/home"]);
      // On est déjà sur la page /home, donc on force le rechargement de la page
      window.location.reload();
    });
  }
}
