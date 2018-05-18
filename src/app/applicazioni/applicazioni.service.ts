import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ApplicazioniService {

  applicazioniCollection: AngularFirestoreCollection<any>;
  applicazioneDocument:   AngularFirestoreDocument<any>;

  constructor(private afs: AngularFirestore) {
    this.applicazioniCollection = this.afs.collection('applicazioni', (ref) => ref.orderBy('name', 'asc').limit(5));
  }

  getData(): Observable<any[]> {
    // ['added', 'modified', 'removed']
    return this.applicazioniCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }

  getApplicazione(id: string) {
    return this.afs.doc<any>(`applicazioni/${id}`);
  }

  createApplicazione(content: string) {
    const applicazione = {
      content,
      hearts: 0,
      time: new Date().getTime(),
    };
    return this.applicazioniCollection.add(applicazione);
  }

  updateApplicazione(id: string, data: any) {
    return this.getApplicazione(id).update(data);
  }

  deleteApplicazione(id: string) {
    return this.getApplicazione(id).delete();
  }
}
