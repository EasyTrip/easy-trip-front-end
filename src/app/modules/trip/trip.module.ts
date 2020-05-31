import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripRoutingModule } from './trip-routing.module';
import { TripComponent } from './components/trip/trip.component';
import { CreateTripComponent } from './components/create-trip/create-trip.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MatNativeDateModule } from '@angular/material/core';
import { APP_DATE_FORMATS, AppDateAdapter } from '../../core/format-datapickers';
import { CreateExpenseComponent } from './components/create-expense/create-expense.component';
import { MatSelectModule } from '@angular/material/select';
import { ExpenseListComponent } from './components/trip-list/expense-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [TripComponent, CreateTripComponent, CreateExpenseComponent, ExpenseListComponent],
  imports: [
    CommonModule,
    TripRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatExpansionModule,
    MatCardModule,
  ],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class TripModule {
}
