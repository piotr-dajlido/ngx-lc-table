import {AfterViewInit, Component, ContentChildren, Input, OnDestroy, OnInit, QueryList, TemplateRef} from '@angular/core';
import {NgxLcTableFooterDirective} from './ngx-lc-table-footer/ngx-lc-table-footer.directive';
import {NgxLcTableColumnComponent} from './ngx-lc-table-column/ngx-lc-table-column.component';
import {NgxLcTableHeaderDirective} from './ngx-lc-table-header/ngx-lc-table-header.directive';
import {NgxLcTableDataService} from '../ngx-lc-table-data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'ngx-lc-table',
  templateUrl: './ngx-lc-table.component.html',
  styleUrls: ['./ngx-lc-table.component.scss']
})
export class NgxLcTableComponent implements AfterViewInit, OnInit, OnDestroy {

  @Input() data: any[];
  @ContentChildren(NgxLcTableColumnComponent) columns: QueryList<NgxLcTableColumnComponent>;
  @ContentChildren(NgxLcTableFooterDirective) footers: QueryList<NgxLcTableFooterDirective>;
  headers: NgxLcTableHeaderDirective[] = [];
  rows: NgxLcTableCell[] = [];
  ngxLcTableDataServiceSub: Subscription;

  constructor(private ngxLcTableDataService: NgxLcTableDataService) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.headers = this.columns.map(column => column.headers.first);
      this.rows = this.columns.map(column => {
        return {prop: column.prop, templateRef: column.rows.first.templateRef};
      });
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

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.ngxLcTableDataServiceSub.unsubscribe();
  }

}

export class NgxLcTableCell {
  prop: string | string[];
  templateRef: TemplateRef<any>;
}
