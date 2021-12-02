import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodenToysComponent } from './wooden-toys.component';

describe('WoodenToysComponent', () => {
  let component: WoodenToysComponent;
  let fixture: ComponentFixture<WoodenToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodenToysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodenToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
