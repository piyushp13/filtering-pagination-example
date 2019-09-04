import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule, MatButtonModule, MatSelectModule, MatAutocompleteModule, MatCheckboxModule,
  MatFormFieldModule, MatTableModule, MatDatepickerModule, MatDialogModule, MatCardModule,
  MatProgressSpinnerModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from '../pagination/pagination.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTableModule,
    MatDatepickerModule,
    MatDialogModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatIconModule,
    PaginationModule
  ],
  exports: [
    FlexLayoutModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTableModule,
    MatDatepickerModule,
    MatDialogModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatIconModule
  ]
})
export class SharedModule { }
