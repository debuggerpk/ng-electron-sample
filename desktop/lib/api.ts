import { RxHR } from '@akanass/rx-http-request';
import { Configuration } from '@reaction/common/models';
import { configStore, dataStore } from './store';
import { map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const REQUEST_HEADERS = { json: true };

// { headers: {{ 'API-KEY': config.api_key }, ...REQUEST_HEADERS }

export const getConfiguration: () => Configuration = () => configStore.get('configuration');
export const getHeaders = () => ({ 'API-KEY': getConfiguration().api_key });

export const getCategories = () => {
  const config = getConfiguration();
  const url = `${config.api_gateway}/outlets/outlets/${config.outlet_id}/categories/`;
  const headers = getHeaders();

  return RxHR.get(url, { headers, json: true });
};

export const getDiscounts = () => {
  const config = getConfiguration();
  const url = `${config.api_gateway}/outlets/outlets/${config.outlet_id}/discounts/`;
  const headers = getHeaders();

  return RxHR.get(url, { headers, json: true });
};

export const getItems = () => {
  const config = getConfiguration();
  const url = `${config.api_gateway}/outlets/outlets/${config.outlet_id}/items/`;
  const headers = getHeaders();

  return RxHR.get(url, { headers, json: true });
};

export const getOutlet = () => {
  let outlet = dataStore.get('outlet', null);

  if (!outlet || new Date().getTime() - new Date(outlet.last_updated).getTime() > 1000 * 60 * 60 * 2) {
    const config = getConfiguration();
    const url = `${config.api_gateway}/outlets/outlets/${config.outlet_id}/`;
    const headers = getHeaders();

    return RxHR.get(url, { headers, json: true }).pipe(
      map(response => (response.response.statusCode === 200 ? response.body : {})),
      tap(data => dataStore.set('outlet', { data, last_updated: new Date() })),
    );
  } else {
    return of(outlet.data);
  }
};

export const getSections = () => {
  const config = getConfiguration();
  const url = `${config.api_gateway}/outlets/outlets/${config.outlet_id}/sections/`;
  const headers = getHeaders();

  return RxHR.get(url, { headers, json: true });
};

export const getShifts = () => {
  const config = getConfiguration();
  const url = `${config.api_gateway}/outlets/shifts/`;
  const headers = getHeaders();

  return RxHR.get(url, { headers, json: true });
};
