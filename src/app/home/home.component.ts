import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';

const arrayNavigation = [ 0, 1, 2, 3, 4, 5];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeTab = 0;
  isShowGallery: Boolean = false;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
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

  // swipe(action = this.SWIPE_ACTION.RIGHT) {
  //   if (this.isShowGallery) {
  //     return;
  //   }
  //   if (action === 'swipedown') {
  //     this.navigatonSection();
  //   } else {
  //     this.navigatonSection(false);
  //   }
  // }
  callShowGalerry(status) {
    this.isShowGallery = status;
  }
}
