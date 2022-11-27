import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrepaidSummaryComponent } from './prepaid-summary/prepaid-summary.component';
import { StepOneComponent } from './step-one/step-one.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  {path: '' , redirectTo: 'home', pathMatch: 'full'},
  {path: 'home' , component:HomeComponent},
  {path: 'step1' , component:StepOneComponent},
  {path: 'prepaid' , component:PrepaidSummaryComponent},
  {path: 'verify' , component:VerifyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
