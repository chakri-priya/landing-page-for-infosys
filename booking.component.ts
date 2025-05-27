import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  bookingDate: string = '';

  constructor(private router: Router) {}

  bookAppointment() {
    alert('Appointment booked successfully for: ' + this.bookingDate);
    this.router.navigate(['/dashboard']);
  }
}
