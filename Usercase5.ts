import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reminder-preference',
  templateUrl: './reminder-preference.component.html',
})
export class ReminderPreferenceComponent {
  method = 'email';

  constructor(private http: HttpClient) {}

  savePreferences() {
    this.http
      .post('http://localhost:8080/api/preferences', { method: this.method })
      .subscribe(() => {
        alert('Preference saved successfully!');
      });
  }
}
