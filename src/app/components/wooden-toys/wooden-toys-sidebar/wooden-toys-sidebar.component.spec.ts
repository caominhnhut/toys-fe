import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodenToysSidebarComponent } from './wooden-toys-sidebar.component';

describe('WoodenToysSidebarComponent', () => {
  let component: WoodenToysSidebarComponent;
  let fixture: ComponentFixture<WoodenToysSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodenToysSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodenToysSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
