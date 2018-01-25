import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

@Injectable()
export class CardService {
  private dbPath = '/Cards';
  card: FirebaseObjectObservable<any> = null;
  constructor(private db: AngularFireDatabase) {}

  getCard(key): FirebaseObjectObservable<any> {
    this.card = this.db.object(`${this.dbPath}/${key}`);
    return this.card;
  }
}
