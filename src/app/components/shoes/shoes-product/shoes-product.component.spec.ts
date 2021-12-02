import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesProductComponent } from './shoes-product.component';

describe('ShoesProductComponent', () => {
  let component: ShoesProductComponent;
  let fixture: ComponentFixture<ShoesProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoesProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
