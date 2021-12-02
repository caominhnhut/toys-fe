import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasticToysProductComponent } from './plastic-toys-product.component';

describe('PlasticToysProductComponent', () => {
  let component: PlasticToysProductComponent;
  let fixture: ComponentFixture<PlasticToysProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlasticToysProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasticToysProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
