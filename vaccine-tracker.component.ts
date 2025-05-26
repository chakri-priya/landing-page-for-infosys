
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccine-tracker',
  templateUrl: './vaccine-tracker.component.html',
  styleUrls: ['./vaccine-tracker.component.css']
})
export class VaccineTrackerComponent implements OnInit {
  groupedData = [
    { type: 'Covishield', location: 'Delhi', availableDoses: 1200 },
    { type: 'Covaxin', location: 'Mumbai', availableDoses: 850 },
    { type: 'Sputnik V', location: 'Chennai', availableDoses: 500 },
    { type: 'Pfizer', location: 'Delhi', availableDoses: 300 },
    { type: 'Moderna', location: 'Bangalore', availableDoses: 200 },
    { type: 'Covishield', location: 'Mumbai', availableDoses: 950 },
    { type: 'Covaxin', location: 'Bangalore', availableDoses: 700 },
    { type: 'Pfizer', location: 'Chennai', availableDoses: 150 },
  ];

  filterMode: 'type' | 'location' | 'both' | null = null;
  searchText: string = '';
  filteredData: any[] = [];

  ngOnInit() {
    this.filteredData = [...this.groupedData]; // Show all data initially
  }

  setFilterMode(mode: 'type' | 'location' | 'both'): void {
    this.filterMode = mode;
    this.searchText = '';
    this.applySearch();
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
      return true; // if no filter mode, show all
    });
  }
}

filterMode: 'type' | 'location' | 'both' | null = null;
searchText: string = '';        // For type or location when single input
searchLocationText: string = ''; // For location when 'both' mode
filteredData: any[] = [];

setFilterMode(mode: 'type' | 'location' | 'both'): void {
  this.filterMode = mode;
  this.searchText = '';
  this.searchLocationText = '';
  this.applySearch();
}

applySearch(): void {
  const searchType = this.searchText.toLowerCase();
  const searchLoc = this.searchLocationText.toLowerCase();

  this.filteredData = this.groupedData.filter(item => {
    const typeMatch = item.type.toLowerCase().includes(searchType);
    const locationMatch = item.location.toLowerCase().includes(searchLoc);

    if (this.filterMode === 'type') return typeMatch;
    if (this.filterMode === 'location') return locationMatch;
    if (this.filterMode === 'both') return typeMatch && locationMatch; // AND for both inputs
    return true;
  });
}
