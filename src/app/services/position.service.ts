import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Position } from '../models/Position';



@Injectable()
export class PositionService {
  positionsRef: AngularFireList<any>;
  positions: Observable<any[]>;
  position: Observable<any>;

  constructor(private db: AngularFireDatabase) {
    this.positionsRef = this.db.list('positions');
    this.positions = this.positionsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()
      }));
    });
   }

   getPositions() {
     return this.positions;
   }

}
