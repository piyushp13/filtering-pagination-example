import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTable'
})
export class FilterTablePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const filters = args[0];
    if (value.length) {
      const keys = Object.keys(filters).filter(key => filters[key] !== '');
      return value.filter(row => keys.reduce((res, key) => res &&
      (row[key] ? row[key].toString().toLowerCase().includes(filters[key].toString().toLowerCase()) : false), true));
    }
    return [];
  }

}
