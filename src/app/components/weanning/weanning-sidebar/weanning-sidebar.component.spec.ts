import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeanningSidebarComponent } from './weanning-sidebar.component';

describe('WeanningSidebarComponent', () => {
  let component: WeanningSidebarComponent;
  let fixture: ComponentFixture<WeanningSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeanningSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeanningSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
