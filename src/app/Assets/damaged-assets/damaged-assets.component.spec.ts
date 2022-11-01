import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamagedAssetsComponent } from './damaged-assets.component';

describe('DamagedAssetsComponent', () => {
  let component: DamagedAssetsComponent;
  let fixture: ComponentFixture<DamagedAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DamagedAssetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DamagedAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
