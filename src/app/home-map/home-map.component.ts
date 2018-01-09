import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-map',
  templateUrl: './home-map.component.html',
  styleUrls: ['./home-map.component.scss']
})
export class HomeMapComponent implements OnInit {
  lat: Number = 42.956305;
  lng: Number = -78.6916818;
  zoom: Number = 12;
  constructor() {}

  ngOnInit() {}
}
