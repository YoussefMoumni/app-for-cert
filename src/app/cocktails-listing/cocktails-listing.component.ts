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

  constructor(private cocktailsListingService: CocktailsListingService) { }

  ngOnInit(): void {
    this.cocktailsListingService.getCocktails().subscribe({
      next: (data) => { this.cocktails = data; this.filteredCocktails = data; },
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
}
