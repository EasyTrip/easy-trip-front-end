import { Injectable } from '@angular/core';
import { Expense } from '../../core/models/expense';
import { Observable, Subject } from 'rxjs';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Trip } from '../../core/models/trip';

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

@Injectable()
export class ExpenseService {
  private subject = new Subject<Expense>();

  constructor(private apollo: Apollo) {
  }

  createExpense(trip: Trip, expense: Expense): void {
    this.apollo.mutate<any>({
      mutation: createExpenseMutation,
      variables: {
        tripId: trip.id,
        name: expense.name,
        description: expense.description,
        price: expense.price,
        priceCurrency: expense.priceCurrency
      }
    }).subscribe(res => {
      this.subject.next(new Expense(res.data.createExpense));
    });
  }

  getExpense(): Observable<Expense> {
    return this.subject.asObservable();
  }
}
