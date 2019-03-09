import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxLcTableDataService {
  data: ReplaySubject<Array<any>> = new ReplaySubject<Array<any>>(1);
  _lastData: Array<any> = [];

  constructor() {
  }

  registerData(data: Array<any>) {
    this._lastData = data;
    this.data.next(data);
  }

  sortBy(prop: string, order: SORT_ORDER = SORT_ORDER.ASC, type: SORT_TYPE = SORT_TYPE.TEXT) {
    let sortFn;
    switch (type) {
      case SORT_TYPE.TEXT:
        sortFn = order === SORT_ORDER.ASC ? (one, two) => (one > two ? 1 : 0) : (one, two) => (one > two ? -1 : 1);
        break;
      case SORT_TYPE.NUMBER:
        break;
      case SORT_TYPE.DATE: {

      }
    }
    this.registerData(this._lastData.sort(sortFn));
  }
}

export enum SORT_ORDER {
  ASC = 'ASC', DESC = 'DESC'
}

export enum SORT_TYPE {
  DATE, TEXT, NUMBER
}
