import { Component } from '@angular/core';
import { CocktailsListingService } from '../services/cocktails-listing.service';
import { Cocktail } from '../types/cocktail.types';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cocktails-listing',
  standalone: true,
  imports: [FormsModule, CommonModule, MatIconModule],
  templateUrl: './cocktails-listing.component.html',
  styleUrl: './cocktails-listing.component.scss'
})
export class CocktailsListingComponent {
  cocktails: Cocktail[] = [];
  filteredCocktails: Cocktail[] = [];
  filter: string = '';
  favorites: { id: string, isFavorite: boolean }[];

  constructor(private cocktailsListingService: CocktailsListingService) { }

  ngOnInit(): void {
    this.cocktailsListingService.getCocktails().subscribe({
      next: (data) => { this.cocktails = data; this.filteredCocktails = data;
        this.filteredCocktails.forEach(cocktail => {
          cocktail.isFavorite = this.isFavorite(cocktail.id);
        });
       },
      error: (error) => console.error('Error!', error)
    });
  }

  filterCocktails(): void {
    if (!this.filter) {
      this.filteredCocktails = this.cocktails;
    } else {
      this.filteredCocktails = this.cocktails.filter(cocktail =>
        cocktail.name.toLowerCase().includes(this.filter.toLowerCase())
      );
    }
  }

  trackByFn(index: number, item: Cocktail): any {
    return item.id;
  }


  loadFavorites(): void {
    this.cocktails.forEach(cocktail => {
      cocktail.isFavorite = this.isFavorite(cocktail.id);
    });
  }

  toggleFavorite(cocktailId: string): void {
    const favorites = new Set(JSON.parse(localStorage.getItem('favorites') || '[]'));
    if (favorites.has(cocktailId)) {
      favorites.delete(cocktailId);
    } else {
      favorites.add(cocktailId);
    }
    localStorage.setItem('favorites', JSON.stringify(Array.from(favorites)));
    this.loadFavorites();
    console.log('favorites', favorites);
    console.log('cocktails', this.cocktails);
  }

  isFavorite(cocktailId: string): boolean {
    const favorites = new Set(JSON.parse(localStorage.getItem('favorites') || '[]'));
    return favorites.has(cocktailId);
  }

}
