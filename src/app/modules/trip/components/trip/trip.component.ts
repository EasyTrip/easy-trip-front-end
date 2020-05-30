import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip } from '../../../../core/models/trip';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

const tripQuery = gql`
  query getTrip($id: ID!) {
    trip(id: $id){
      id
      name
      description
      startDate
      finishDate
    }
  }
`

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.sass']
})

export class TripComponent implements OnInit {
  trip: Trip;

  constructor(private route: ActivatedRoute, private apollo: Apollo) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadTrip(params.id);
    });
  }

  private loadTrip(id: string) {
    this.apollo.watchQuery<any>({
      query: tripQuery,
      variables: {id}
    })
      .valueChanges
      .subscribe(res => {
        this.trip = new Trip(res.data.trip);
      })
  }
}
