import { Component, Input, OnInit } from '@angular/core';
import { Trip } from '../../../../core/models/trip';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.sass']
})
export class TripCardComponent implements OnInit {
  @Input() trip: Trip;

  constructor() { }

  ngOnInit() {
  }

}
