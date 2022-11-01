import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOrderItemsComponent } from './product-order-items.component';

describe('ProductOrderItemsComponent', () => {
  let component: ProductOrderItemsComponent;
  let fixture: ComponentFixture<ProductOrderItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOrderItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOrderItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
