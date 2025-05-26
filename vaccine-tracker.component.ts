
import { Component } from '@angular/core';

@Component({
  selector: 'app-vaccine-tracker',
  templateUrl: './vaccine-tracker.component.html',
  styleUrls: ['./vaccine-tracker.component.css']
})
export class VaccineTrackerComponent {
  searchText = '';
  vaccineData = [
    { type: 'Covaxin', location: 'Center A', quantity: 120 },
    { type: 'Covishield', location: 'Center B', quantity: 95 },
    { type: 'Pfizer', location: 'Center C', quantity: 200 },
    { type: 'Moderna', location: 'Center D', quantity: 75 }
  ];
}
