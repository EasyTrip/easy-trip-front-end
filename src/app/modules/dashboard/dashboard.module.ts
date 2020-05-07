import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TripCardComponent } from './components/trip-card/trip-card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";



@NgModule({
  declarations: [TripCardComponent, DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [DashboardRoutingModule]
})
export class DashboardModule { }
