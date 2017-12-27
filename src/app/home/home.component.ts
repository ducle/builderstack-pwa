import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';

const arrayNavigation = [0, 1, 2, 3, 4, 5];
const imageArray = [
  'assets/images/one.jpg',
  'assets/images/two.jpg',
  'assets/images/three.jpg',
  'assets/images/four.jpg',
  'assets/images/five.jpg',
  'assets/images/six.jpg'
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeTab = 0;
  isShowGallery = false;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  images = imageArray;
  imageGalleryIndex = 0;
  config = null;
  constructor(private cardService: CardService) {}

  ngOnInit() {
    // this.cardService.getCard().subscribe(response => {
    //   console.log('response', response);
    // });
  }
  navigatonSection(next = true) {
    const index = this.activeTab;
    let nextIndex = arrayNavigation.length > index + 1 ? index + 1 : 0;
    if (!next) {
      nextIndex = index - 1 >= 0 ? index - 1 : arrayNavigation.length - 1;
    }
    this.activeTab = nextIndex;
  }
  callShowGalerry({ status, index }) {
    this.isShowGallery = status;
    this.imageGalleryIndex = index;
  }
  swipe(type) {
    if (type === 'swipeleft') {
      this.imageGalleryIndex = this.imageGalleryIndex - 1 >= 0 ? this.imageGalleryIndex - 1 : imageArray.length - 1;
    } else {
      this.imageGalleryIndex = this.imageGalleryIndex + 1 >= imageArray.length ? 0 : this.imageGalleryIndex + 1;
    }
  }
}
