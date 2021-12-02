import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddingProductCategoryComponent } from './admin-adding-product-category.component';

describe('AdminAddingProductCategoryComponent', () => {
  let component: AdminAddingProductCategoryComponent;
  let fixture: ComponentFixture<AdminAddingProductCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddingProductCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddingProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
