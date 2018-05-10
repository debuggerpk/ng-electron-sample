import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { SectionsActions, SectionsActionTypes, LoadSections, SectionsLoaded } from './sections.actions';
import { SectionsState } from './sections.reducer';
import { DataPersistence } from '@nrwl/nx';

@Injectable()
export class SectionsEffects {
  @Effect() effect$ = this.actions$.ofType(SectionsActionTypes.SectionsAction);

  @Effect()
  loadSections$ = this.dataPersistence.fetch(SectionsActionTypes.LoadSections, {
    run: (action: LoadSections, state: SectionsState) => {
      return new SectionsLoaded(state);
    },

    onError: (action: LoadSections, error) => {
      console.error('Error', error);
    },
  });

  constructor(private actions$: Actions, private dataPersistence: DataPersistence<SectionsState>) {}
}
