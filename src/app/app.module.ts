import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrentalListComponent } from './carrental-list/carrental-list.component';
import { CarrentalDetailsComponent } from './carrental-details/carrental-details.component';
import { UpdateCarrentalComponent } from './update-carrental/update-carrental.component';
import { CreateCarrentalComponent } from './create-carrental/create-carrental.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrentalListComponent,
    CarrentalDetailsComponent,
    UpdateCarrentalComponent,
    CreateCarrentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
