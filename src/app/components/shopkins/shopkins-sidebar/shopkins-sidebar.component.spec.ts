import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkinsSidebarComponent } from './shopkins-sidebar.component';

describe('ShopkinsSidebarComponent', () => {
  let component: ShopkinsSidebarComponent;
  let fixture: ComponentFixture<ShopkinsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopkinsSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopkinsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
