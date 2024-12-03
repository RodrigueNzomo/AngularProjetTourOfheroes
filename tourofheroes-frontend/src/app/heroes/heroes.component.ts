import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes'; // Assure-toi que tu as bien cette liste de héros dans ton fichier mock

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes = HEROES; // Liste des héros
  hero = { id: 1, name: 'Windstorm' }; // Héros actuellement sélectionné
  selectedHero: { id: number; name: string } | null = null; // Variable pour l'héro sélectionné

  // Méthode pour sélectionner un héros
  selectHero(selectedHero: { id: number; name: string }) {
    this.selectedHero = selectedHero;
  }
}
