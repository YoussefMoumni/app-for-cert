import { Routes } from '@angular/router';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailsListingComponent } from './cocktails-listing/cocktails-listing.component';

export const routes: Routes = [
    { path: '', component: CocktailsListingComponent },
    { path: 'cocktails/:cocktailId', component: CocktailDetailsComponent }
];
