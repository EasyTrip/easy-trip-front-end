import { Component, Input, OnInit } from '@angular/core';
import { Expense } from '../../../../core/models/expense';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Trip } from '../../../../core/models/trip';

const createExpenseMutation = gql`
  mutation createExpense($tripId: ID!, $name: String!, $description: String, $price: Float!, $priceCurrency: String!) {
    createExpense(tripId: $tripId, name: $name, description: $description, price: $price, priceCurrency: $priceCurrency) {
      id
      name
      description
      price
      priceCurrency
    }
  }
`;


@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.sass']
})
export class CreateExpenseComponent implements OnInit {
  @Input() trip: Trip;

  expense: Expense = new Expense();
  currencies: string[] = ['UAH', 'USD', 'EUR'];

  constructor(private apollo: Apollo) {
  }

  ngOnInit(): void {
    this.expense.priceCurrency = this.currencies[0];
  }

  public createExpense() {
    this.apollo.mutate<any>({
      mutation: createExpenseMutation,
      variables: {
        tripId: this.trip.id,
        name: this.expense.name,
        description: this.expense.description,
        price: this.expense.price,
        priceCurrency: this.expense.priceCurrency
      }
    }).subscribe(res => {
      console.log(res);
    });
  }
}
