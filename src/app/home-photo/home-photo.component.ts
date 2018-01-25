import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-home-photo',
  templateUrl: './home-photo.component.html',
  styleUrls: ['./home-photo.component.scss']
})
export class HomePhotoComponent implements OnInit, OnChanges {
  myInterval = 0;
  @Input() photoData: any;
  @Output() callShowGalerry = new EventEmitter();
  images = [];
  constructor() {}

  ngOnInit() {
    this.images = this.photoData.cardImages;
  }
  ngOnChanges() {
    this.images = this.photoData.cardImages;
  }
}
