import { Component, Input, OnInit } from '@angular/core';
import { Expense } from '../../../../core/models/expense';
import { Apollo } from 'apollo-angular';
import { Trip } from '../../../../core/models/trip';
import { ExpenseService } from '../../expense.service';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.sass']
})
export class CreateExpenseComponent implements OnInit {
  @Input() trip: Trip;

  expense: Expense = new Expense();
  currencies: string[] = ['UAH', 'USD', 'EUR'];

  constructor(private expenseService: ExpenseService) {
  }

  ngOnInit(): void {
    this.expense.priceCurrency = this.currencies[0];
  }

  public createExpense() {
    this.expenseService.createExpense(this.trip, this.expense);
  }
}
