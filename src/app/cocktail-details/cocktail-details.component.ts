import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cocktail } from '../types/cocktail.types';
import { CocktailsListingService } from '../services/cocktails-listing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktail-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.scss'
})
export class CocktailDetailsComponent {
  cocktail: Cocktail;

  constructor(private route: ActivatedRoute, private cocktailsListingService: CocktailsListingService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const cocktailId = params.get('cocktailId');
      if (cocktailId) {
        this.cocktailsListingService.getCocktail(cocktailId).subscribe({
          next: (data) => {
            this.cocktail = data;
          },
          error: (error) => console.error('Error!', error)
        });
      }
    });
  }
}