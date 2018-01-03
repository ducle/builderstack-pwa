import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

const API_URL = 'https://api-buildstacks.herokuapp.com/api/cards/';
@Injectable()
export class CardService {
  constructor(private http: HttpClient) {}
  getCard(index = 1) {
    const url = API_URL + index;
    return this.http.get(url).map(response => {
      return response;
    });
  }
}
