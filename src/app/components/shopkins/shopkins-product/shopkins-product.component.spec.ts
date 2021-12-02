import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkinsProductComponent } from './shopkins-product.component';

describe('ShopkinsProductComponent', () => {
  let component: ShopkinsProductComponent;
  let fixture: ComponentFixture<ShopkinsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopkinsProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopkinsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
