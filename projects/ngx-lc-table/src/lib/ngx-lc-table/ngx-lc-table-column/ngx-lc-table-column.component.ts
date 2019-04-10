import {Component, ContentChild, ContentChildren, forwardRef, Input, QueryList} from '@angular/core';
import {NgxLcTableHeaderDirective} from '../ngx-lc-table-header/ngx-lc-table-header.directive';
import {NgxLcTableRowDirective} from '../ngx-lc-table-row/ngx-lc-table-row.directive';
import {NgxLcTableFooterDirective} from '../ngx-lc-table-footer/ngx-lc-table-footer.directive';
import {NgxLcTableRowExpandedDirective} from '../ngx-lc-table-row/ngx-lc-table-row-expanded.directive';
import {NGX_LC_ALIGNABLE_COMPONENT, NgxLcAlignable} from '../ngx-lc-table-alignment/ngx-lc-alignable';

@Component({
  selector: 'ngx-lc-table-column',
  templateUrl: './ngx-lc-table-column.component.html',
  styleUrls: ['./ngx-lc-table-column.component.css'],
  providers: [{provide: NGX_LC_ALIGNABLE_COMPONENT, useExisting: forwardRef(() => NgxLcTableColumnComponent)}]
})
export class NgxLcTableColumnComponent extends NgxLcAlignable {

  @Input() prop: string | string[];

  @Input() set width(value: string) {
    this.style = this.style || {};
    this.style['minWidth'] = value;
    this.style['maxWidth'] = value;
  }

  @ContentChild(NgxLcTableHeaderDirective) header: NgxLcTableHeaderDirective;
  @ContentChildren(NgxLcTableRowDirective) rows: QueryList<NgxLcTableRowDirective>;
  @ContentChildren(NgxLcTableRowExpandedDirective) expandedRows: QueryList<NgxLcTableRowExpandedDirective>;
  @ContentChild(NgxLcTableFooterDirective) footer: NgxLcTableFooterDirective;

}
