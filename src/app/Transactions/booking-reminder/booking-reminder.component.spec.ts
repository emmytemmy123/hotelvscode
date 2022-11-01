import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingReminderComponent } from './booking-reminder.component';

describe('BookingReminderComponent', () => {
  let component: BookingReminderComponent;
  let fixture: ComponentFixture<BookingReminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingReminderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
