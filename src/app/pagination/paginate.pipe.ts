import { Pipe, PipeTransform } from '@angular/core';
import { PaginateService } from './paginate.service';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  constructor(private paginationService: PaginateService) {}
  transform(value: any, ...args: any[]): any {
    const {items, pageNum} = args[0];
    if (value instanceof Array && value.length) {
      this.paginationService.setPages(value.length, items, 'p1');
      return value.slice(items * (pageNum - 1), items * pageNum);
    }
    return [];
  }

}
