import { createFeatureSelector } from '@ngrx/store';
import { CategoryState } from '@reaction/common/models';

export const getCategoryState = createFeatureSelector<CategoryState>('categories');
