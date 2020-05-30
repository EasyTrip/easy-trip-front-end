import { Component, OnInit } from '@angular/core';
import { Trip } from '../../../../core/models/trip';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Router } from '@angular/router';

const createTripMutation = gql`
  mutation createTrip($name: String!, $description: String, $startDate: ISO8601DateTime, $finishDate: ISO8601DateTime) {
    createTrip(name: $name, description: $description, startDate: $startDate, finishDate: $finishDate) {
      id
    }
  }
`;

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.sass']
})
export class CreateTripComponent implements OnInit {
  trip: Trip = new Trip();

  constructor(private apollo: Apollo, private router: Router) {
  }

  ngOnInit() {
  }

  public createTrip() {
    this.apollo.mutate<any>({
      mutation: createTripMutation,
      variables: {
        name: this.trip.name,
        description: this.trip.description,
        startDate: this.trip.startDate,
        finishDate: this.trip.finishDate
      }
    })
      .subscribe(res => {
        this.router.navigate([`/trips/${res.data.createTrip.id}`]);
      });
  }
}
