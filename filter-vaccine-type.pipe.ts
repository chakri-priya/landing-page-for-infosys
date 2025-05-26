import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterVaccineType'
})
export class FilterVaccineTypePipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(item =>
      item.type.toLowerCase().includes(searchText) ||
      item.location.toLowerCase().includes(searchText)
    );
  }
}
