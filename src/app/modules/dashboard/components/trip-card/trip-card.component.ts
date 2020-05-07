import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.sass']
})
export class TripCardComponent implements OnInit {
  @Input() trip: String;

  constructor() { }

  ngOnInit() {
  }

}
