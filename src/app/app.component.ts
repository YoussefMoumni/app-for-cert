import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CocktailsListingComponent } from './cocktails-listing/cocktails-listing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule,CocktailsListingComponent ],
  templateUrl: 'app.component.html',
})
export class AppComponent {
}
