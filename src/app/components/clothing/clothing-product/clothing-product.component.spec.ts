import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingProductComponent } from './clothing-product.component';

describe('ClothingProductComponent', () => {
  let component: ClothingProductComponent;
  let fixture: ComponentFixture<ClothingProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothingProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
