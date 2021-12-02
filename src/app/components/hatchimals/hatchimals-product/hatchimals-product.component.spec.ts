import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HatchimalsProductComponent } from './hatchimals-product.component';

describe('HatchimalsProductComponent', () => {
  let component: HatchimalsProductComponent;
  let fixture: ComponentFixture<HatchimalsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HatchimalsProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HatchimalsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
