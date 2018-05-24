import { Injectable }                   from "@angular/core";
import { Store }      	                from '@ngrx/store';
import { Subscription }                 from "rxjs";
import { Sandbox } 	      		          from '../shared/sandbox/base.sandbox';
import { ApplicazioniApiClient }        from './applicazioniApiClient.service';
import * as store     	                from '../shared/store';
import * as applicazioniActions         from '../shared/store/actions/applicazioni.action';
import * as applicazioneDetailsActions  from '../shared/store/actions/applicazione-details.action';
import { Applicazione, User }           from '../shared/models';

@Injectable()
export class ApplicazioniSandbox extends Sandbox {

  public applicazioni$                = this.appState$.select(store.getApplicazioniData);
  public applicazioniLoading$         = this.appState$.select(store.getApplicazioniLoading);
  public applicazioneDetails$         = this.appState$.select(store.getApplicazioneDetailsData);
  public applicazioneDetailsLoading$  = this.appState$.select(store.getApplicazioneDetailsLoading);
  public loggedUser$                  = this.appState$.select(store.getLoggedUser);

  private subscriptions: Array<Subscription> = [];

  constructor(
    protected appState$: Store<store.State>,
    private applicazioniApiClient: ApplicazioniApiClient
  ) {
    super(appState$);
    this.registerEvents();
  }

  /**
   * Loads products from the server
   */
  public loadApplicazioni(): void {
    this.appState$.dispatch(new applicazioniActions.LoadAction())
  }

  /**
   * Loads product details from the server
   */
  public loadApplicazioneDetails(id: number): void {
    this.appState$.dispatch(new applicazioneDetailsActions.LoadAction(id))
  }

  /**
   * Dispatches an action to select product details
   */
  public selectApplicazione(applicazione: Applicazione): void {
    this.appState$.dispatch(new applicazioneDetailsActions.LoadSuccessAction(applicazione))
  }

  /**
   * Unsubscribes from events
   */
  public unregisterEvents() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Subscribes to events
   */
  private registerEvents(): void {
    // Subscribes to culture
    this.subscriptions.push(this.culture$.subscribe((culture: string) => this.culture = culture));

    this.subscriptions.push(this.loggedUser$.subscribe((user: User) => {
      if (user.isLoggedIn) this.loadApplicazioni();
    }))
  }
}