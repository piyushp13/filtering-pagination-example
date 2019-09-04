import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';
import { HomeComponent } from './home/home.component';
import { ControlCenterComponent } from './control-center/control-center.component';

const routes: Routes = [
    {path: '', component: MainContainerComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'control-center', component: ControlCenterComponent },
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ]},
    {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtlRoutingModule { }
