import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Trip } from "../../../../core/models/trip";
import gql from "graphql-tag";
import { Apollo } from "apollo-angular";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.sass']
})

export class TripComponent implements OnInit {
  trip: Trip;

  private tripQuery = gql`
    query getTrip($id: ID!) {
      trip(id: $id){
        id
        name
        startDate
        finishDate
      }
    }
  `
  constructor(private route: ActivatedRoute, private apollo: Apollo) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadTrip(params['id']);
    });
  }

  private loadTrip(id: String) {
    this.apollo.watchQuery<any>({
      query: this.tripQuery,
      variables: {id: id}
    })
      .valueChanges
      .subscribe(res => {
        this.trip = new Trip(res.data.trip);
      })
  }
}
