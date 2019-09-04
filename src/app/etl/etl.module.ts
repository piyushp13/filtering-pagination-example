import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtlRoutingModule } from './etl-routing.module';
import { MainContainerComponent } from './main-container/main-container.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ControlCenterComponent } from './control-center/control-center.component';
import { ListComponent } from './list/list.component';
import { FilterTablePipe } from './filter-table.pipe';
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
  declarations: [MainContainerComponent, HomeComponent, ControlCenterComponent, ListComponent, FilterTablePipe],
  imports: [
    CommonModule,
    EtlRoutingModule,
    SharedModule,
    PaginationModule
  ]
})
export class EtlModule { }
