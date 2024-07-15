import { TestBed } from '@angular/core/testing';

import { CocktailsListingService } from './cocktails-listing.service';

describe('CocktailsListingService', () => {
  let service: CocktailsListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailsListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});