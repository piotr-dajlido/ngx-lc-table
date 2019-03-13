import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NgxLcTableColumnComponent} from './ngx-lc-table/ngx-lc-table-column/ngx-lc-table-column.component';
import {NgxLcTableComponent} from './ngx-lc-table/ngx-lc-table.component';
import {NgxLcTableFooterDirective} from './ngx-lc-table/ngx-lc-table-footer/ngx-lc-table-footer.directive';
import {NgxLcTableHeaderDirective} from './ngx-lc-table/ngx-lc-table-header/ngx-lc-table-header.directive';
import {NgxLcTableRowDirective} from './ngx-lc-table/ngx-lc-table-row/ngx-lc-table-row.directive';
import {CommonModule} from '@angular/common';
import {NgxLcTableRowExpandedDirective} from './ngx-lc-table/ngx-lc-table-row/ngx-lc-table-row-expanded.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NgxLcTableComponent,
    NgxLcTableColumnComponent,
    NgxLcTableFooterDirective,
    NgxLcTableHeaderDirective,
    NgxLcTableRowDirective,
    NgxLcTableRowExpandedDirective,
  ],
  exports: [NgxLcTableComponent,
    NgxLcTableColumnComponent,
    NgxLcTableFooterDirective,
    NgxLcTableHeaderDirective,
    NgxLcTableRowDirective,
    NgxLcTableRowExpandedDirective],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NgxLcTableModule {
}
