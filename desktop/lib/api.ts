import { RxHR } from '@akanass/rx-http-request';
import { Configuration } from '@reaction/common/models';
import { configStore } from './store';

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

export const getOutlet = () => {
  const config = getConfiguration();
  const url = `${config.api_gateway}/outlets/outlets/${config.outlet_id}/`;
  const headers = getHeaders();

  return RxHR.get(url, { headers, json: true });
};

export const getShifts = () => {
  const config = getConfiguration();
  const url = `${config.api_gateway}/outlets/shifts/`;
  const headers = getHeaders();

  return RxHR.get(url, { headers, json: true });
};
