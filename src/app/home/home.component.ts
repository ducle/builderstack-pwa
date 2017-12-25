import { Component, OnInit } from '@angular/core';

const arrayNavigation = ['card', 'photo', 'features', 'map', 'contact'];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeTab = 'card';
  constructor() {}

  ngOnInit() {}
  nextSection() {
    const index = arrayNavigation.findIndex(item => item === this.activeTab);
    const nextIndex = arrayNavigation.length > index + 1 ? index + 1 : 0;
    this.activeTab = arrayNavigation[nextIndex];
  }
}
