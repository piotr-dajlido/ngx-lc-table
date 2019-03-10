import {AfterViewInit, Component, ContentChildren, HostBinding, Input, OnDestroy, OnInit, QueryList, TemplateRef} from '@angular/core';
import {NgxLcTableFooterDirective} from './ngx-lc-table-footer/ngx-lc-table-footer.directive';
import {NgxLcTableColumnComponent} from './ngx-lc-table-column/ngx-lc-table-column.component';
import {NgxLcTableDataService} from '../ngx-lc-table-data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'ngx-lc-table',
  templateUrl: './ngx-lc-table.component.html',
  styleUrls: ['./ngx-lc-table.component.scss']
})
export class NgxLcTableComponent implements AfterViewInit {

  @HostBinding('class.ngx-lc-table')
  ngxLcTableClass = true;
  @Input() data: any[];
  @ContentChildren(NgxLcTableColumnComponent) columnsDefinitions: QueryList<NgxLcTableColumnComponent>;
  @ContentChildren(NgxLcTableFooterDirective) footers: QueryList<NgxLcTableFooterDirective>;
  headers: NgxLcTableHeader[] = [];
  rows: NgxLcTableRow[] = [];

  constructor() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.headers = this.columnsDefinitions.map(column => ({width: column.width, templateRef: column.headers.first.templateRef}));
      this.rows = this.data
      .map(dataItem =>
        ({
          cells: this.columnsDefinitions
          .map(column =>
            ({
              value: this.resolveRequestedProperties(column.prop, dataItem),
              template: column.rows.first.templateRef,
              width: column.width
            }))
        }));
    });
  }

  resolveRequestedProperties(prop: string | string[], dataItem: any) {
    if (prop instanceof Array) {
      const resolvedPropValues = {};
      (<Array<string>> prop).forEach((_prop) => {
        this.buildObjectFromDescendantPath(
          _prop.split('.'),
          resolvedPropValues,
          this.getDescendantProperty(dataItem, _prop));
      });
      return resolvedPropValues;
    } else {
      return this.getDescendantProperty(dataItem, prop);
    }
  }

  getDescendantProperty(obj, property): object {
    const arr = property.split('.');
    while (arr.length && (obj = obj[arr.shift()])) {
    }
    return obj;
  }

  buildObjectFromDescendantPath(path: string[], obj: any, value: any) {
    const property = path.shift();
    if (path.length) {
      obj[property] = obj[property] || {};
      this.buildObjectFromDescendantPath(path, obj[property], value);
    } else {
      obj[property] = value;
    }
    return obj;
  }

}

export class NgxLcTableRow {
  cells: NgxLcTableCell[];
}

export class NgxLcTableCell {
  value: any;
  width: string;
  template: TemplateRef<any>;
}


export class NgxLcTableHeader {
  width: string;
  templateRef: TemplateRef<any>;
}
