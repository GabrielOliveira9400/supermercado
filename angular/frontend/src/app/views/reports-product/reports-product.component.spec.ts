import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsProductComponent } from './reports-product.component';

describe('ReportsProductComponent', () => {
  let component: ReportsProductComponent;
  let fixture: ComponentFixture<ReportsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
