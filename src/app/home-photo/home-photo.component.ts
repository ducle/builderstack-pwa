import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  imageGalleryIndex = 0;
  myInterval = 0;
  @Output() callShowGalerry = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  swipe(type) {
    if (type === 'swipeleft') {
      this.imageGalleryIndex = this.imageGalleryIndex - 1 >= 0 ? this.imageGalleryIndex - 1 : imageArray.length - 1;
    } else {
      this.imageGalleryIndex = this.imageGalleryIndex + 1 >=  imageArray.length ? 0 : this.imageGalleryIndex + 1;
    }
  }
}
