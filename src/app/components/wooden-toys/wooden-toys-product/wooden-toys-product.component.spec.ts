import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodenToysProductComponent } from './wooden-toys-product.component';

describe('WoodenToysProductComponent', () => {
  let component: WoodenToysProductComponent;
  let fixture: ComponentFixture<WoodenToysProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodenToysProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodenToysProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
