import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.scss']
})
export class HomeContactComponent implements OnInit {
  @Output() focusedInput = new EventEmitter();
  @Output() focusedInputOut = new EventEmitter();
  constructor() {}
  ngOnInit() {}
}
