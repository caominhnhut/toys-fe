import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HatchimalsComponent } from './hatchimals.component';

describe('HatchimalsComponent', () => {
  let component: HatchimalsComponent;
  let fixture: ComponentFixture<HatchimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HatchimalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HatchimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
