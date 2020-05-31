import { AfterContentInit, Component, Input, OnDestroy } from '@angular/core';
import { Expense } from '../../../../core/models/expense';
import { ExpenseService } from '../../expense.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.sass']
})
export class ExpenseListComponent implements AfterContentInit, OnDestroy {
  @Input() expenses: Expense[];
  subscription: Subscription;

  constructor(private expenseService: ExpenseService) {
  }

  ngAfterContentInit(): void {
    this.subscription = this.expenseService.getExpense().subscribe(expense => {
      this.expenses.push(expense);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
