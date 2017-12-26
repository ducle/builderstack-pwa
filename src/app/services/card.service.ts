import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://www.buildstacks.com/wp-json/restApi/v1/';
@Injectable()
export class CardService {
  constructor(private http: HttpClient) {}
  getCard() {
    const url = API_URL + 'usercards/';
    return this.http.post(url, { user: 627 }).map(response => {
      return response;
    });
  }
}
