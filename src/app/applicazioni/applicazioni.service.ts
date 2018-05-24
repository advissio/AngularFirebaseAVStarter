import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Applicazione }          from '../shared/models';


@Injectable()
export class ApplicazioniService {

  private applicazioniSubscription;

  applicazioniCollection: AngularFirestoreCollection<Applicazione>;
  applicazioneDocument:   AngularFirestoreDocument<Applicazione>;
  
  constructor(private afs: AngularFirestore) {
    this.applicazioniCollection = this.afs.collection('applicazioni', (ref) => ref.orderBy('nome', 'asc'));
  }

  getData(): Observable<Applicazione[]> {
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
        
    const applicazione: Applicazione = {
      codice,
      nome,
      custom_o_pckg,
      pckg_verticalizzazioni,
      obsoleta
    };
    return this.applicazioniCollection.add(applicazione);
  }

  updateApplicazione(id: string, data: any) {
    return this.getApplicazione(id).update(data);
  }

  deleteApplicazione(id: string) {
    return this.getApplicazione(id).delete();
  }
  
  /**
   * Transforms grid data products recieved from the API into array of 'Product' instances
   *
   * @param products
   */
  static gridAdapter(applicazioni: any): Array<Applicazione> {
    return applicazioni.map(applicazione => new Applicazione(Applicazione));
  }

  /**
   * Transforms product details recieved from the API into instance of 'Product'
   *
   * @param product
   */
  static applicazioneDetailsAdapter(applicazione: any): Applicazione {
    return new Applicazione(applicazione);
  }
  
}
