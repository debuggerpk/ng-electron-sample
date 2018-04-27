import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { ConfigEffects } from './config.effects';
import { LoadConfig, ConfigLoaded } from './config.actions';

import { Observable } from 'rxjs/Observable';

describe('ConfigEffects', () => {
  let actions$: Observable<any>;
  let effects$: ConfigEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [ConfigEffects, DataPersistence, provideMockActions(() => actions$)],
    });

    effects$ = TestBed.get(ConfigEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions$ = hot('-a-|', { a: new LoadConfig({}) });
      expect(effects$.loadConfig$).toBeObservable(hot('-a-|', { a: new ConfigLoaded({}) }));
    });
  });
});
