import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {
  appointmentDate: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/appointment').subscribe(data => {
      this.appointmentDate = data.datetime;
    });
  }

  scheduleReminder() {
    this.message = `Reminder is scheduled for 24 hours before: ${new Date(this.appointmentDate).toLocaleString()}`;
  }
}
