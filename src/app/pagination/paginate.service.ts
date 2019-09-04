import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginateService {
  pages = new Subject();
  constructor() { }
  setPages(items: number, itemsPerPage: number, id) {
    if (!id) {
      id = `paginator`;
    }
    const pages = Math.ceil(items / itemsPerPage);
    this.pages.next({id, pages});
  }
}
