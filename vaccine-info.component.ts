import { Component } from '@angular/core';
import { VaccineService } from './vaccine.service';

@Component({
  selector: 'app-vaccine-info',
  templateUrl: './vaccine-info.component.html',
})
export class VaccineInfoComponent {
  vaccineTypes: any;
  locations: any;

  constructor(private vaccineService: VaccineService) {}

  loadVaccineInfo() {
    this.vaccineService.getVaccineTypes().subscribe((types) => {
      this.vaccineTypes = types;
    });

    this.vaccineService.getLocations().subscribe((locs) => {
      this.locations = locs;
    });
  }
}
