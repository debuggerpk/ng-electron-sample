import { RxHR } from '@akanass/rx-http-request';
import { store } from './store';
import { Configuration } from '@reaction/common/models/config';
import { Observable } from 'rxjs/Observable';

export const getConfiguration: () => Configuration = () => store.get('configuration');

export const getOutlet: () => Observable<any> = () => {
  const config = getConfiguration();
  const url = `${config.api_gateway}/outlets/outlets/${config.outlet_id}/`;

  return RxHR.get(url, { headers: { 'API-KEY': config.api_key } });
};

export const getShifts: () => Observable<any> = () => {
  const config = getConfiguration();
  const url = `${config.api_gateway}/outlets/shifts/`;

  return RxHR.get(url, { headers: { 'API-KEY': config.api_key } });
};
