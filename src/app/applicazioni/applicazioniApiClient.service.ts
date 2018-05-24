import { Injectable }           from '@angular/core';
import { HttpService,
         GET,
         Path,
         Adapter    }           from '../shared/asyncServices/http';
import { Observable }           from 'rxjs/Observable';
import { ApplicazioniService }  from './applicazioni.service';

@Injectable()
export class ApplicazioniApiClient extends HttpService {

  /**
   * Retrieves all products
   */
  @GET("/product")
  @Adapter(ApplicazioniService.gridAdapter)
  public getApplicazioni(): Observable<any> { return null; };

  /**
   * Retrieves product details by a given id
   * 
   * @param id
   */
  @GET("/product/{id}")
  @Adapter(ApplicazioniService.applicazioneDetailsAdapter)
  public getApplicazioneDetails(@Path("id") id: number): Observable<any> { return null; };
}