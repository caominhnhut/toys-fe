import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesSidebarComponent } from './shoes-sidebar.component';

describe('ShoesSidebarComponent', () => {
  let component: ShoesSidebarComponent;
  let fixture: ComponentFixture<ShoesSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoesSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
