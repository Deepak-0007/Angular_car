import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrentalListComponent } from './carrental-list/carrental-list.component';
import { CarrentalDetailsComponent } from './carrental-details/carrental-details.component';
import { UpdateCarrentalComponent } from './update-carrental/update-carrental.component';
import { CreateCarrentalComponent } from './create-carrental/create-carrental.component';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
