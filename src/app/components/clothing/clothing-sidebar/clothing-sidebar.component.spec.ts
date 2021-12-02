import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingSidebarComponent } from './clothing-sidebar.component';

describe('ClothingSidebarComponent', () => {
  let component: ClothingSidebarComponent;
  let fixture: ComponentFixture<ClothingSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothingSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
