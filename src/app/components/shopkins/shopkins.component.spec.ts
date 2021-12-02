import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkinsComponent } from './shopkins.component';

describe('ShopkinsComponent', () => {
  let component: ShopkinsComponent;
  let fixture: ComponentFixture<ShopkinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopkinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
