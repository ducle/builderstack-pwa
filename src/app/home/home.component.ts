import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { CardService } from '../services/card.service';
import { SwiperDirective } from 'ngx-swiper-wrapper';

const arrayNavigation = [0, 1, 2, 3, 4];
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
export class HomeComponent implements OnInit, AfterViewInit {
  activeTab = 0;
  isShowGallery = false;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  images = imageArray;
  imageGalleryIndex = 0;
  config = null;
  cardData = {};
  setNewHeight = false;
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;
  @HostListener('window:resize')
  onResize() {
    if (window.innerHeight > 400 && this.setNewHeight) {
      this.focusedInputOut();
    }
  }
  constructor(private cardService: CardService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => this.cardService.getCard(+params.get('id'))).subscribe(card => {
      this.cardData = card;
    });
  }
  ngAfterViewInit() {
    this.directiveRef.config = { loop: true };
    this.directiveRef.update();
  }
  navigatonSection(next = true) {
    const index = this.activeTab;
    const nextIndex = arrayNavigation.length > index + 1 ? index + 1 : 0;
    this.activeTab = nextIndex;
    this.directiveRef.nextSlide();
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
  changeIndexTab(event) {
    if (event !== 4) {
      this.setNewHeight = false;
    }
    this.activeTab = event;
  }
  setIndexTab(index) {
    this.directiveRef.setIndex(index);
  }
  callCloseGallery() {
    this.isShowGallery = false;
  }
  focusedInput() {
    this.setNewHeight = true;
    this.directiveRef.update();
  }
  focusedInputOut() {
    this.setNewHeight = false;
    //this.directiveRef.update();
  }
}
