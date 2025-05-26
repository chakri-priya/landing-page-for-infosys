
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
export class VaccineTrackerComponent implements OnInit {
  searchType = '';
  searchLocation = '';
  vaccineData = [
    { type: 'Covaxin', location: 'Center A', quantity: 120 },
    { type: 'Covishield', location: 'Center B', quantity: 95 },
    { type: 'Pfizer', location: 'Center C', quantity: 200 },
    { type: 'Moderna', location: 'Center D', quantity: 75 },
    { type: 'Sputnik V', location: 'Center A', quantity: 40 },
    { type: 'Covovax', location: 'Center B', quantity: 65 }
  ];
  filteredData = [];
  currentPage = 1;
  itemsPerPage = 3;

  ngOnInit(): void {
    this.updateFilter();
  }

  updateFilter(): void {
    const type = this.searchType.toLowerCase();
    const location = this.searchLocation.toLowerCase();

    this.filteredData = this.vaccineData.filter(item =>
      item.type.toLowerCase().includes(type) &&
      item.location.toLowerCase().includes(location)
    );
    this.currentPage = 1;
  }

  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredData.slice(start, start + this.itemsPerPage);
  }

  totalPages(): number {
    return Math.ceil(this.filteredData.length / this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
  }
}






filterMode: 'type' | 'location' | 'both' | null = null;
searchText: string = '';
filteredData: any[] = [];

setFilterMode(mode: 'type' | 'location' | 'both'): void {
  this.filterMode = mode;
  this.searchText = '';
  this.applySearch(); // reset filter
}

getPlaceholder(): string {
  switch (this.filterMode) {
    case 'type': return 'Search by vaccine type';
    case 'location': return 'Search by location';
    case 'both': return 'Search by type and location';
    default: return 'Search...';
  }
}

applySearch(): void {
  const search = this.searchText.toLowerCase();

  this.filteredData = this.groupedData.filter(item => {
    const typeMatch = item.type.toLowerCase().includes(search);
    const locationMatch = item.location.toLowerCase().includes(search);

    if (this.filterMode === 'type') return typeMatch;
    if (this.filterMode === 'location') return locationMatch;
    if (this.filterMode === 'both') return typeMatch && locationMatch;
    return true;
  });
    }

