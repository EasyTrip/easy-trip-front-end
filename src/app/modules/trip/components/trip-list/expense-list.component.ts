import { Component, Input, OnInit } from '@angular/core';
import { Expense } from '../../../../core/models/expense';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.sass']
})
export class ExpenseListComponent implements OnInit {
  @Input() expenses: Expense[];

  constructor() { }

  ngOnInit(): void {
  }
}
