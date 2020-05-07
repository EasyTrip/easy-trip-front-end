import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripRoutingModule } from './trip-routing.module';
import { TripComponent } from './components/trip/trip.component';



@NgModule({
  declarations: [TripComponent],
  imports: [
    CommonModule,
    TripRoutingModule
  ]
})
export class TripModule { }
