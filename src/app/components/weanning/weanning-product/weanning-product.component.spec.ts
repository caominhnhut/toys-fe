import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeanningProductComponent } from './weanning-product.component';

describe('WeanningProductComponent', () => {
  let component: WeanningProductComponent;
  let fixture: ComponentFixture<WeanningProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeanningProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeanningProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
