import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeanningComponent } from './weanning.component';

describe('WeanningComponent', () => {
  let component: WeanningComponent;
  let fixture: ComponentFixture<WeanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
