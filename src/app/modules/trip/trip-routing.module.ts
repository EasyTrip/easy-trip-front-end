import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { TripComponent } from "./components/trip/trip.component";

const routes: Routes = [
  { path: 'trips/:id', component: TripComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TripRoutingModule { }
