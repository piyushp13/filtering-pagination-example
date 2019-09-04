import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationDirective } from './pagination.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaginatePipe } from './paginate.pipe';
import { FormsModule } from '@angular/forms';
import { MatSelectModule, MatFormFieldModule } from '@angular/material';



@NgModule({
  declarations: [PaginationComponent, PaginatePipe, PaginationDirective],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    PaginationComponent,
    PaginatePipe
  ]
})
export class PaginationModule { }
