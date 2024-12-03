import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroesComponent], // Importation des composants nécessaires
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tourofheroes-frontend';
}
