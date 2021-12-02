import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddingCategoryComponent } from './admin-adding-category.component';

describe('AdminAddingCategoryComponent', () => {
  let component: AdminAddingCategoryComponent;
  let fixture: ComponentFixture<AdminAddingCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddingCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddingCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
