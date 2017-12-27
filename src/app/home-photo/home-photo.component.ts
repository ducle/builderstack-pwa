import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-photo',
  templateUrl: './home-photo.component.html',
  styleUrls: ['./home-photo.component.scss']
})
export class HomePhotoComponent implements OnInit {
  myInterval = 0;
  @Input() images: any;
  @Output() callShowGalerry = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
