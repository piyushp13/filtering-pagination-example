import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { AuthenticationService } from './authentication.service';

const routes: Routes = [
  {path: '', component: MainComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: 'landing', component: LandingComponent, canActivate: [AuthenticationService]},
    {path: 'etl', loadChildren: () => import('./etl/etl.module').then(m => m.EtlModule), canActivate: [AuthenticationService]},
    {path: '', redirectTo: 'login', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
