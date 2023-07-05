import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrentalListComponent } from './carrental-list/carrental-list.component';
import { CreateCarrentalComponent } from './create-carrental/create-carrental.component';
import { UpdateCarrentalComponent } from './update-carrental/update-carrental.component';
import { CarrentalDetailsComponent } from './carrental-details/carrental-details.component';
const routes: Routes = [
  {path: 'carrental', component: CarrentalListComponent},
  {path: 'create-carrental', component: CreateCarrentalComponent},
  {path: '',redirectTo: 'carrental', pathMatch: 'full'},
  {path: 'update-carrental/:id', component: UpdateCarrentalComponent},
  {path: 'carrental-details/:id',component: CarrentalDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
