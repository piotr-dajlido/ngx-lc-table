import {
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  QueryList,
  TemplateRef,
  ViewChild
} from '@angular/core';
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
  private _data: any[];
  @Input() set data(data: any[]) {
    this._data = data;
    if (!!this.buildTable) {
      this.buildTable();
    }
  }
  @Output('onRowClick') onRowClick: EventEmitter<any> = new EventEmitter();
  @ContentChildren(NgxLcTableColumnComponent) columnsDefinitions: QueryList<NgxLcTableColumnComponent>;
  @ContentChildren(NgxLcTableFooterDirective, {descendants: false}) footerDefinition: QueryList<NgxLcTableFooterDirective>;
  @ViewChild('emptyCell') emptyCellDefinition: TemplateRef<any>;
  headers: NgxLcTableHeader[] = [];
  rows: NgxLcTableRow[] = [];
  footers: NgxLcTableFooter = new NgxLcTableFooter();
  hasHeaders = false;
  hasFooters = false;

  constructor() {
  }

  buildTable: () => void;

  ngAfterViewInit() {
    this.buildTable = () => {
      setTimeout(() => {
        this.headers = this.columnsDefinitions.map(column => {
          if (!this.hasHeaders && column.header) {
            this.hasHeaders = true;
          }
          return {
            style: column.header ? column.header.style ? column.header.style : column.style : column.style,
            templateRef: column.header ? column.header.templateRef : this.emptyCellDefinition,
          };
        });

        this.footers = {
          cells: this.columnsDefinitions.map(column => {
            if (!this.hasFooters && column.footer) {
              this.hasFooters = true;
            }
            return {
              style: Object.assign(column.footer && column.footer.style ? column.footer.style : {}, {minWidth: column.style ? column.style.minWidth : 'unset'}),
              templateRef: column.footer ? column.footer.templateRef : this.emptyCellDefinition,
              value: []
            };
          })
        };

        this.rows = this._data.map(dataItem =>
          ({
            rawData: dataItem,
            content: this.columnsDefinitions.map((column, i) => {
              const value = this.resolveRequestedProperties(column.prop, dataItem);

              (this.footers.cells[i].value as Array<any>).push(value);
              return {
                style: column.style,
                cells: column.rows.map(cell => {
                  return {
                    value: value,
                    templateRef: cell ? cell.templateRef : this.emptyCellDefinition,
                    style: cell.style ? cell.style : column.style
                  };
                })
              };
            }),
            expandedRows: this.columnsDefinitions.filter(column => !!column.expandedRows.length).map(column => {
              const value = this.resolveRequestedProperties(column.prop, dataItem);
              return {
                value: value,
                templateRef: column.expandedRows.first ? column.expandedRows.first.templateRef : null,
                style: column.expandedRows.first.style
              };
            }),
          }));
      });
    };
    this.buildTable();
  }

  resolveRequestedProperties(prop: string | string[], dataItem: any) {
    if (prop instanceof Array) {
      const resolvedPropValues = {};
      (<Array<string>>prop).forEach((_prop) => {
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

  excludePropertiesFromStyle(properites: string[], obj) {
    if (!(!!obj)) {
      return;
    }
    for (const propName in properites) {
      if (obj[propName] !== null && obj[propName] !== undefined) {
        delete obj[propName];
      }
    }
    return obj;
  }


}

export class NgxLcTableRow {
  rawData: any;
  content: NgxLcTableRowContent[];
  expandedRows: NgxLcTableCell[];
}

export class NgxLcTableRowContent {
  style: any;
  cells: NgxLcTableCell[];
}

export class NgxLcTableCell {
  value: any;
  style: any;
  templateRef: TemplateRef<any>;
}

export class NgxLcTableFooter {
  cells: NgxLcTableCell[] = [];
}

export class NgxLcTableHeader {
  style: any;
  templateRef: TemplateRef<any>;
}
