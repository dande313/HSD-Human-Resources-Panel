import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Position } from '../models/position';



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

   getPosition(id: string) {
    this.position = this.db.object('/positions/' + id).valueChanges();
    return this.position;
  }

  newPosition(position: Position) {
    this.positionsRef.push(position);
  }

  updatePosition(id: string, position: Position) {
    return this.positionsRef.update(id, position);
  }

  deletePosition(id: string) {
    return this.positionsRef.remove(id);
  }

}
