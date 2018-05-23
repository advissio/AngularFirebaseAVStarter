import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ApplicazioniService {

  applicazioniRighe;
  applicazioniCollection: AngularFirestoreCollection<any>;
  applicazioneDocument:   AngularFirestoreDocument<any>;

  constructor(private afs: AngularFirestore) {
    this.applicazioniCollection = this.afs.collection('applicazioni', (ref) => ref.orderBy('nome', 'asc'));
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

  /**
   * Transforms grid data products recieved from the API into array of 'Product' instances
   *
   * @param products
  static gridAdapter(products: any): Array<Product> {
    return products.map(product => new Product(product));
  }
   */
  
  getApplicazione(id: string) {
    return this.afs.doc<any>(`applicazioni/${id}`);
  }

  createApplicazione(  codice: string
                     , nome: string
                     , custom_o_pckg: string
                     , pckg_verticalizzazioni: boolean
                     , obsoleta: boolean
   ) {
    const applicazione = {
      codice,
      nome,
      custom_o_pckg,
      pckg_verticalizzazioni,
      obsoleta,
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
