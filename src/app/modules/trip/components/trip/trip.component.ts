import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip } from '../../../../core/models/trip';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Expense } from '../../../../core/models/expense';

const tripQuery = gql`
  query getTrip($id: ID!) {
    trip(id: $id){
      id
      name
      description
      startDate
      finishDate
      expenses {
        id
        name
        description
        price
        priceCurrency
      }
    }
  }
`;

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.sass']
})

export class TripComponent implements OnInit {
  trip: Trip;
  expenses: Expense[];

  constructor(private route: ActivatedRoute, private apollo: Apollo) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadData(params.id);
    });
  }

  private loadData(tripId: string) {
    this.apollo.watchQuery<any>({
      query: tripQuery,
      variables: {id: tripId}
    })
      .valueChanges
      .subscribe(res => {
        this.trip = new Trip(res.data.trip);
        this.expenses = res.data.trip.expenses.map(exp => new Expense(exp));
      });
  }
}
