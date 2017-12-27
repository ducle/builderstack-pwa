import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';

const arrayNavigation = ['card', 'photo', 'features', 'map', 'contact'];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeTab = 'card';
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  constructor(private cardService: CardService) {}

  ngOnInit() {
    // this.cardService.getCard().subscribe(response => {
    //   console.log('response', response);
    // });
  }
  navigatonSection(next = true) {
    const index = arrayNavigation.findIndex(item => item === this.activeTab);
    let nextIndex = arrayNavigation.length > index + 1 ? index + 1 : 0;
    if (!next) {
      nextIndex = index - 1 >= 0 ? index - 1 : arrayNavigation.length - 1;
    }
    this.activeTab = arrayNavigation[nextIndex];
  }

  swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
    if (action === 'swipedown') {
      this.navigatonSection();
    } else {
      this.navigatonSection(false);
    }
  }
}
