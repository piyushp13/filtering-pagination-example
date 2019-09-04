import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  columns = [];
  tableData = [];
  filters = new FormGroup({
    Company: new FormControl(''),
    Product: new FormControl(''),
    Sales: new FormControl(''),
    Date: new FormControl('')
  });
  search = this.filters.value;
  pages = [];
  activePage = 1;
  itemsPerPage = 20;
  constructor(private infoService: InfoService) {}

  ngOnInit() {
    this.getTableData();
    this.filters.valueChanges.subscribe((formValue) => {
      // console.log('Value: ', this.filters.value);
      this.search = formValue;
    });
  }

  getTableData() {
    this.infoService.getTableData(`sales.json`).subscribe((data: Array<any>) => {
      this.tableData = data;
      this.columns = Object.keys(data[0]);
    });
  }

}
