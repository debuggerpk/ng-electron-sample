import {TestBed} from '@angular/core/testing';
import {StoreModule} from '@ngrx/store';
import {provideMockActions} from '@ngrx/effects/testing';
import {DataPersistence} from '@nrwl/nx';
import {hot} from '@nrwl/nx/testing';

import {MainEffects} from './main.effects';
import {LoadMain, MainLoaded } from './main.actions';

import { Observable } from 'rxjs/Observable';

describe('MainEffects', () => {
  let actions$: Observable<any>;
  let effects$: MainEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
      ],
      providers: [
        MainEffects,
        DataPersistence,
        provideMockActions(() => actions$)
      ],
    });

    effects$ = TestBed.get(MainEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions$ = hot('-a-|', {a: new LoadMain({})});
      expect(effects$.loadMain$).toBeObservable(
        hot('-a-|', {a: new MainLoaded({})})
      );
    });
  });
});
