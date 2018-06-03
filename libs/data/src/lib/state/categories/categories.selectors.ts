import { createFeatureSelector } from '@ngrx/store';
import { Category } from '@reaction/common/models';

const getCategoryState = createFeatureSelector<Array<Category>>('categories');
