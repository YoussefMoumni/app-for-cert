import { Component } from '@angular/core';
import { CocktailsListingService } from '../services/cocktails-listing.service';
import { Cocktail } from '../types/cocktail.types';

@Component({
  selector: 'app-cocktails-listing',
  standalone: true,
  imports: [],
  templateUrl: './cocktails-listing.component.html',
  styleUrl: './cocktails-listing.component.scss'
})
export class CocktailsListingComponent {
  cocktails: Cocktail[] = [];

  constructor(private cocktailsListingService: CocktailsListingService) { }

  ngOnInit(): void {
    this.cocktailsListingService.getCocktails().subscribe({
      next: (data) => this.cocktails = data,
      error: (error) => console.error('Error!', error)
    });
  }
}
