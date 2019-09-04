import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtlRoutingModule } from './etl-routing.module';
import { MainContainerComponent } from './main-container/main-container.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ControlCenterComponent } from './control-center/control-center.component';



@NgModule({
  declarations: [MainContainerComponent, HomeComponent, ControlCenterComponent],
  imports: [
    CommonModule,
    EtlRoutingModule,
    SharedModule
  ]
})
export class EtlModule { }
