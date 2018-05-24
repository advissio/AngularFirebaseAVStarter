import { Action }       from '@ngrx/store';
import { Applicazione } from '../../models';
import { type }         from '../../utility';

export const ActionTypes = {
  LOAD:         type('[Applicazione Details] Load'),
  LOAD_SUCCESS: type('[Applicazione Details] Load Success'),
  LOAD_FAIL:    type('[Applicazione Details] Load Fail')
};

/**
 * Product Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: number = null) { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Applicazione) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any = null) { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | LoadFailAction;