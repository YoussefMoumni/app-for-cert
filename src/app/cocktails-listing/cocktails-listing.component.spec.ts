import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsListingComponent } from './cocktails-listing.component';

describe('CocktailsListingComponent', () => {
  let component: CocktailsListingComponent;
  let fixture: ComponentFixture<CocktailsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailsListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktailsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
