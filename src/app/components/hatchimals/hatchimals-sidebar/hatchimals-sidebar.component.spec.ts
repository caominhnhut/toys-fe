import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HatchimalsSidebarComponent } from './hatchimals-sidebar.component';

describe('HatchimalsSidebarComponent', () => {
  let component: HatchimalsSidebarComponent;
  let fixture: ComponentFixture<HatchimalsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HatchimalsSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HatchimalsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
