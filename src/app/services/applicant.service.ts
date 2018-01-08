import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Applicant } from '../models/Applicant';



@Injectable()
export class ApplicantService {
  applicantsRef: AngularFireList<any>;
  applicants: Observable<any[]>;
  applicant: Observable<any>;

  constructor(private db: AngularFireDatabase) {
    this.applicantsRef = this.db.list('applicants');
    this.applicants = this.applicantsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()
      }));
    });
   }

   getApplicants() {
     return this.applicants;
   }

}