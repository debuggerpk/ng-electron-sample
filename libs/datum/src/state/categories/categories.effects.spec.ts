import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { CategoriesEffects } from './categories.effects';
import { LoadCategories, CategoriesLoaded } from './categories.actions';

import { Observable } from 'rxjs/Observable';

describe('CategoriesEffects', () => {
  let actions$: Observable<any>;
  let effects$: CategoriesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [CategoriesEffects, DataPersistence, provideMockActions(() => actions$)],
    });

    effects$ = TestBed.get(CategoriesEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions$ = hot('-a-|', { a: new LoadCategories({}) });
      expect(effects$.loadCategories$).toBeObservable(hot('-a-|', { a: new CategoriesLoaded({}) }));
    });
  });
});
