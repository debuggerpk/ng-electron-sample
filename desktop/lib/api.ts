import { RxHR } from '@akanass/rx-http-request';
import { Configuration, Outlet, Item, Discount, Section, Category } from '@reaction/common/models';
import { configStore, dataStore } from './store';
import { map, tap, catchError } from 'rxjs/operators';
import { of as observableOf } from 'rxjs/observable/of';
import { Observable } from 'rxjs';

export const getConfiguration: () => Configuration = () => configStore.get('configuration');
export const getHeaders = () => ({ 'API-KEY': getConfiguration().api_key });

export const getOutlet: () => Observable<Outlet> = () => {
  const outlet = dataStore.get('outlet', null);

  if (!outlet || new Date().getTime() - new Date(outlet.udpated_at).getTime() > 1000 * 60 * 60 * 2) {
    const config = getConfiguration();
    const url = `${config.api_gateway}/outlets/outlets/${config.outlet_id}/`;
    const headers = getHeaders();

    return RxHR.get<Outlet>(url, { headers, json: true }).pipe(
      map(response => response.body),
      tap(data => dataStore.set('outlet', { data, udpated_at: new Date() })),
      catchError(error => observableOf(<Outlet>outlet.data)),
    );
  } else {
    return observableOf(<Outlet>outlet.data);
  }
};

export function getForOutlet<T>(endpointName: string): Observable<T> {
  const data = dataStore.get(endpointName, null);

  if (!data || new Date().getTime() - new Date(data.updated_at).getTime() > 1000 * 60 * 60 * 2) {
    const config = getConfiguration();
    const url = `${config.api_gateway}/outlets/outlets/${config.outlet_id}/${endpointName}/`;
    const headers = getHeaders();

    return RxHR.get<T>(url, {
      headers,
      json: true,
    }).pipe(
      map(response => response.body),
      tap(data => dataStore.set(endpointName, { data, udpated_at: new Date() })),
      catchError(() => observableOf(<T>data.data)),
    );
  } else {
    return observableOf(<T>data.data);
  }
}
