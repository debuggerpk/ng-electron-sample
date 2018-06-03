import { FluxStandardAction } from '@reaction/common/models';
import { OperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

/**
 * inspired by ofType from @ngrx/effects
 *
 * @param allowedTypes allowed action.type strings
 */
export function ofType<T extends FluxStandardAction>(
  ...allowedTypes: string[]
): OperatorFunction<FluxStandardAction, T> {
  return filter((action: FluxStandardAction): action is T => allowedTypes.some(type => type === action.type));
}
