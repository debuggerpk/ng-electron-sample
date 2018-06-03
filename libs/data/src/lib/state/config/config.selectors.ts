import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Configuration } from '@reaction/common/models';

export const getConfigurationState = createFeatureSelector<Configuration>('config');
