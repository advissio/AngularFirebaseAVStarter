import 'rxjs/add/operator/catch';
import { map, switchMap }               from 'rxjs/operators';
import { Injectable }                   from '@angular/core';
import { Effect, Actions }              from '@ngrx/effects';
import { Action }                       from '@ngrx/store';
import { Observable }                   from 'rxjs/Observable';
import { of }                           from 'rxjs';
import { ApplicazioniApiClient }        from '../../../applicazioni/applicazioniApiClient.service';
import * as applicazioniActions         from '../actions/applicazioni.action';
import * as applicazioneDetailsActions  from '../actions/applicazione-details.action';
import { Store }                        from '@ngrx/store';
import * as store                       from '../index';
import { Applicazione }                 from '../../models';

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application. StateUpdates is an observable of the latest state and
 * dispatched action. The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class ApplicazioniEffects {

  constructor(
    private actions$: Actions,
    private applicazioniApiClient: ApplicazioniApiClient,
    private appState$: Store<store.State>) {}

  /**
   * Applicazioni list
   */
  @Effect()
  getApplicazioni$: Observable<Action> = this.actions$.pipe(
    ofType(applicazioniActions.ActionTypes.LOAD),
    pipe(map((action: applicazioniActions.LoadAction) => action.payload)),
    pipe(switchMap(state => {
      return this.applicazioniApiClient.getApplicazioni()
        .pipe(map(applicazioni => new applicazioniActions.LoadSuccessAction(applicazioni)))
        .catch(error  => of(new applicazioniActions.LoadFailAction()));
    })));

  /**
   * Applicazione details
   */
  @Effect()
  getApplicazioneDetails$: Observable<Action> = this.actions$.pipe(
    ofType(applicazioneDetailsActions.ActionTypes.LOAD),
    map((action: applicazioneDetailsActions.LoadAction) => action.payload),
    switchMap(state => {
      return this.applicazioniApiClient.getApplicazioneDetails(state).pipe(
      map(applicazioni => new applicazioneDetailsActions.LoadSuccessAction(applicazioni))
      .catch(error  => of(new applicazioneDetailsActions.LoadFailAction()))
      );}
    )
  );
}