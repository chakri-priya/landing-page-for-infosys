
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterVaccine'
})
export class FilterVaccinePipe implements PipeTransform {
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
