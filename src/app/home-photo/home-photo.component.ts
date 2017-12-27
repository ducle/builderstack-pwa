import { Component, OnInit } from '@angular/core';

const imageArray = [
  'assets/images/one.jpg',
  'assets/images/two.jpg',
  'assets/images/three.jpg',
  'assets/images/four.jpg',
  'assets/images/five.jpg',
  'assets/images/six.jpg'
];
@Component({
  selector: 'app-home-photo',
  templateUrl: './home-photo.component.html',
  styleUrls: ['./home-photo.component.scss']
})
export class HomePhotoComponent implements OnInit {
  images = imageArray;
  showGalerry: Boolean = false;
  imageGalleryIndex: Number = 0;
  myInterval = 0;
  constructor() {}

  ngOnInit() {}
}
