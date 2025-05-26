import { Component } from '@angular/core';
import { VaccineService } from './vaccine.service';

@Component({
  selector: 'app-vaccine-inventory',
  templateUrl: './vaccine-inventory.component.html',
})
export class VaccineInventoryComponent {
  vaccineData: any[] = [];
  searchText: string = '';
  constructor(private vaccineService: VaccineService) {}

  loadVaccineInventory() {
    this.vaccineData = [];

    this.vaccineService.getVaccineTypes().subscribe((types: any[]) => {
      this.vaccineService.getLocations().subscribe((locations: any[]) => {
        types.forEach(type => {
          const matchedLocation = locations.find(
            loc => loc.vaccineId === type.id
          );
          if (matchedLocation) {
            this.vaccineData.push({
              type: type.name,
              location: matchedLocation.name || matchedLocation.city,
              quantity: type.quantity || matchedLocation.quantity || 0
            });
          }
        });
      });
    });
  }
}
