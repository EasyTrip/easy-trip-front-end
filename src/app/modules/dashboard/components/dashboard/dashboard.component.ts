import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Trip } from '../../../../core/models/trip';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})

export class DashboardComponent implements OnInit {
  trips: Array<Trip>;

  private loadTripsQuery = gql`
    query getTrips {
      currentUser {
        trips {
          id
          name
        }
      }
    }
  `

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.loadTrips();
  }

  private loadTrips(): void {
    this.apollo.watchQuery<any>({ query: this.loadTripsQuery })
      .valueChanges
      .subscribe(res => {
        this.trips = res.data.currentUser.trips.map(trip => new Trip(trip));
      })
  }
}
