import {AfterViewInit, Component, ContentChildren, HostBinding, Input, QueryList, TemplateRef, ViewChild} from '@angular/core';
import {NgxLcTableFooterDirective} from './ngx-lc-table-footer/ngx-lc-table-footer.directive';
import {NgxLcTableColumnComponent} from './ngx-lc-table-column/ngx-lc-table-column.component';

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
  @ContentChildren(NgxLcTableFooterDirective) footerDefinition: QueryList<NgxLcTableFooterDirective>;
  @ViewChild('emptyCell') emptyCellDefinition: TemplateRef<any>;
  headers: NgxLcTableHeader[] = [];
  rows: NgxLcTableRow[] = [];
  footer: NgxLcTableFooter = new NgxLcTableFooter();

  constructor() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.headers = this.columnsDefinitions.map(column => ({width: column.width, templateRef: column.headers.first.templateRef}));
      this.footer = {
        cells:
          this.columnsDefinitions
          .map(column =>
            ({
                width: column.width,
                templateRef: column.footer.first ? column.footer.first.templateRef : this.emptyCellDefinition,
                value: []
              }
            )
          )
      };
      this.rows = this.data
      .map(dataItem =>
        ({
          cells: this.columnsDefinitions
          .map((column, i) => {
            const value = this.resolveRequestedProperties(column.prop, dataItem);
            (this.footer.cells[i].value as Array<any>).push(value);
            return {
              value: value,
              templateRef: column.rows.first.templateRef,
              width: column.width
            };
          })
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
  templateRef: TemplateRef<any>;
}

export class NgxLcTableFooter {
  cells: NgxLcTableCell[] = [];
}

export class NgxLcTableHeader {
  width: string;
  templateRef: TemplateRef<any>;
}
