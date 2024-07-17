import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private cocktailsListingService: CocktailsListingService, private router: Router) { }

  goBack() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const cocktailId = params.get('cocktailId');
      if (cocktailId) {
        this.cocktailsListingService.getCocktail(cocktailId).subscribe({
          next: (data) => {
            this.cocktail = data;

            let favorites = localStorage.getItem('favorites');
            if (favorites) {
              favorites = JSON.parse(favorites);
              if (favorites && favorites.includes(this.cocktail.id)) {
                this.cocktail.isFavorite = true;
              } else {
                this.cocktail.isFavorite = false;
              }
            }

            console.log(this.cocktail);
            console.log(favorites);
          },
          error: (error) => console.error('Error!', error)
        });
      }
    });
  }
  toggleFavorite() {
    this.cocktail.isFavorite = !this.cocktail.isFavorite;
    const favorites = new Set(JSON.parse(localStorage.getItem('favorites') || '[]'));
    if (this.cocktail.isFavorite) {
      favorites.add(this.cocktail.id);
    } else {
      favorites.delete(this.cocktail.id);
    }
    localStorage.setItem('favorites', JSON.stringify(Array.from(favorites)));
  }
}