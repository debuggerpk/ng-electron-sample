import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { SectionsEffects } from './sections.effects';
import { LoadSections, SectionsLoaded } from './sections.actions';

import { Observable } from 'rxjs/Observable';

describe('SectionsEffects', () => {
  let actions$: Observable<any>;
  let effects$: SectionsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [SectionsEffects, DataPersistence, provideMockActions(() => actions$)],
    });

    effects$ = TestBed.get(SectionsEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions$ = hot('-a-|', { a: new LoadSections({}) });
      expect(effects$.loadSections$).toBeObservable(hot('-a-|', { a: new SectionsLoaded({}) }));
    });
  });
});
