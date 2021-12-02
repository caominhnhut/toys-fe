import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasticToysComponent } from './plastic-toys.component';

describe('PlasticToysComponent', () => {
  let component: PlasticToysComponent;
  let fixture: ComponentFixture<PlasticToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlasticToysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasticToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
