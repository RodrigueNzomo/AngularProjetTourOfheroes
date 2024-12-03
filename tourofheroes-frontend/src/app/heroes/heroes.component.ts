import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes'; // Importer la liste des héros

// Définition de l'interface Hero
interface Hero {
  id: number;
  name: string;
  action: string; // Action du héros
}

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes: Hero[] = HEROES; // Liste des héros
  selectedHero?: Hero; // Propriété pour le héros sélectionné
  newHeroName: string = ''; // Propriété pour le nom du nouveau héros

  // Méthode pour sélectionner un héros
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // Méthode pour ajouter un nouveau héros
  addHero(): void {
    if (this.newHeroName.trim()) { // Vérification que le nom du héros n'est pas vide
      const newHero: Hero = {
        id: this.heroes.length + 1,  // Générer un id unique pour le héros
        name: this.newHeroName.trim(),
        action: 'Nouvelle action héroïque' // Action par défaut, peut être modifiée
      };
      this.heroes.push(newHero);
      this.newHeroName = ''; // Réinitialisation du champ de saisie
    }
  }

  // Méthode pour supprimer un héros avec confirmation
  deleteHero(hero: Hero): void {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${hero.name}?`);
    if (confirmDelete) {
      this.heroes = this.heroes.filter(h => h.id !== hero.id); // Suppression du héros
      // Si le héros sélectionné est supprimé, on le désélectionne
      if (this.selectedHero?.id === hero.id) {
        this.selectedHero = undefined;
      }
    }
  }

  // Méthode pour réinitialiser le héros sélectionné
  clearSelection(): void {
    this.selectedHero = undefined;
  }
}
