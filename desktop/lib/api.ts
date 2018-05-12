import { RxHR } from '@akanass/rx-http-request';
import { Configuration } from '@reaction/common/models';
import { configStore } from './store';

const REQUEST_HEADERS = { json: true };

export const getConfiguration: () => Configuration = () => configStore.get('configuration');

export const getOutlet = () => {
  const config = getConfiguration();
  const url = `${config.api_gateway}/outlets/outlets/${config.outlet_id}/`;

  return RxHR.get(url, { headers: { 'API-KEY': config.api_key }, ...REQUEST_HEADERS });
};

export const getShifts = () => {
  const config = getConfiguration();
  const url = `${config.api_gateway}/outlets/shifts/`;

  return RxHR.get(url, { headers: { 'API-KEY': config.api_key }, ...REQUEST_HEADERS });
};

export const getDiscounts = () => {
  const config = getConfiguration();
  const url = `${config.api_gateway}/outlets/outlets/${config.outlet_id}/discounts/`;

  return RxHR.get(url, {headers: {'API-KEY': config.api_key}, ...REQUEST_HEADERS});
}
