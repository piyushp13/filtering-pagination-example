import { Component, OnInit, Output, Optional, Input } from '@angular/core';
import { PaginateService } from '../paginate.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Output() pageChange = new EventEmitter();
  @Output() pageSizeChange = new EventEmitter();
  @Input() itemsPerPage = 2;
  @Input() activePage = 1;
  pageSizeOptions = [2, 5, 10, 20, 50];
  pages = [];
  constructor(private paginationService: PaginateService) {
    this.paginationService.pages.subscribe((result: {id: string, pages: number}) => {
      this.pages = Array(result.pages).fill(1).map((v, i) => v + i);
    });
  }

  ngOnInit() {
  }

  onPageChange(pageNumber: number) {
    this.activePage = pageNumber;
    this.pageChange.emit(pageNumber);
  }

  onPageSizeChange() {
    this.onPageChange(1);
    this.pageSizeChange.emit(this.itemsPerPage);
  }

}
