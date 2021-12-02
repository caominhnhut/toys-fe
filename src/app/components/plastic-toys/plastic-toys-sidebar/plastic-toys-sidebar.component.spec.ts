import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasticToysSidebarComponent } from './plastic-toys-sidebar.component';

describe('PlasticToysSidebarComponent', () => {
  let component: PlasticToysSidebarComponent;
  let fixture: ComponentFixture<PlasticToysSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlasticToysSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasticToysSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
