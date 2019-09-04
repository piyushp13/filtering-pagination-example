import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule, MatButtonModule, MatSelectModule, MatAutocompleteModule, MatCheckboxModule, MatFormFieldModule, MatTableModule, MatDatepickerModule, MatDialogModule, MatCardModule, MatProgressSpinnerModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatIconModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
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
  ],
  exports: [
    FlexLayoutModule,
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
