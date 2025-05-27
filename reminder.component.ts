import { Component } from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent {
  appointmentDate: string = '';
  message: string = '';

  scheduleReminder() {
    if (!this.appointmentDate) {
      this.message = 'Please select a date and time.';
      return;
    }

    const appointmentTime = new Date(this.appointmentDate);
    const reminderTime = new Date(appointmentTime.getTime() - 24 * 60 * 60 * 1000);

    this.message = `Reminder scheduled for: ${reminderTime.toLocaleString()}`;
  }
}
