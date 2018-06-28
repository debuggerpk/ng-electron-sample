import { Pipe, PipeTransform } from '@angular/core';
import { isString, isUndefined } from '@reaction/common/utils/check-type';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(input: Array<any>, config: string): Array<any> {
    if (config) {
      const [prop, asc] = this._extractFromConfig(config);
      asc ? input.sort(((a, b) => this.sort(a[prop], b[prop]))) : input.sort(((a, b) => this.sort(a[prop], b[prop]))).reverse();
    }
    return input;
  }

  private sort(first: any, second: any): number {
    if (first === second) {
      return 0;
    }

    if (isUndefined(first) || first === '') {
      return 1;
    }

    if (isUndefined(second) || second === '') {
      return -1;
    }

    if (isString(first) && isString(second)) {
      return first.toLowerCase().localeCompare(second.toLowerCase());
    }

    return first - second;
  }

  private _extractFromConfig(config: string): Array<any> {
    const sign = config.substr(0, 1);
    const prop = config.replace(/^[-+]/, '');
    const asc = sign !== '-';
    return [prop, asc];
  }
}


