import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-map',
  templateUrl: './home-map.component.html',
  styleUrls: ['./home-map.component.scss']
})
export class HomeMapComponent implements OnInit {
  lat: Number = 51.678418;
  lng: Number = 7.809007;
  constructor() {}

  ngOnInit() {}
}
