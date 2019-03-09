import {ContentChildren, Directive, Input, QueryList, TemplateRef, ViewChildren} from '@angular/core';
import {NgxLcTableHeaderDirective} from '../ngx-lc-table-header/ngx-lc-table-header.directive';
import {NgxLcTableRowDirective} from '../ngx-lc-table-row/ngx-lc-table-row.directive';

@Directive({
  selector: '[ngxLcTableColumn]'
})
export class NgxLcTableColumnDirective {
  @Input() prop: string | string[];

  @ContentChildren(NgxLcTableHeaderDirective) headers: QueryList<NgxLcTableHeaderDirective>;
  @ContentChildren(NgxLcTableRowDirective) rows: QueryList<NgxLcTableRowDirective>;

  constructor(public templateRef: TemplateRef<any>) {
    console.log(this.templateRef);
    setTimeout(() => {
      console.log(this);
    }, 2000);
  }
}
