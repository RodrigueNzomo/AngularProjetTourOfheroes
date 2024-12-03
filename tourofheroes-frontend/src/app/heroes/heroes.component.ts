import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes'; // Assure-toi que tu as bien cette liste de héros dans ton fichier mock

interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes = HEROES; // Liste des héros
  selectedHero?: Hero; // Déclaration d'une propriété pour le héros sélectionné

  onSelect(hero: Hero): void {
    this.selectedHero = hero; // Méthode pour sélectionner un héros
  }
}
