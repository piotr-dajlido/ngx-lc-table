import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NgxLcTableHeaderComponent} from './ngx-lc-table/ngx-lc-table-header/ngx-lc-table-header.component';
import {NgxLcTableFooterComponent} from './ngx-lc-table/ngx-lc-table-footer/ngx-lc-table-footer.component';
import {NgxLcTableColumnComponent} from './ngx-lc-table/ngx-lc-table-column/ngx-lc-table-column.component';
import {NgxLcTableComponent} from './ngx-lc-table/ngx-lc-table.component';
import {NgxLcTableFooterDirective} from './ngx-lc-table/ngx-lc-table-footer/ngx-lc-table-footer.directive';
import {NgxLcTableHeaderDirective} from './ngx-lc-table/ngx-lc-table-header/ngx-lc-table-header.directive';
import {NgxLcTableRowDirective} from './ngx-lc-table/ngx-lc-table-row/ngx-lc-table-row.directive';
import {NgxLcTableRowComponent} from './ngx-lc-table/ngx-lc-table-row/ngx-lc-table-row.component';
import {NgxLcTableColumnDirective} from './ngx-lc-table/ngx-lc-table-column/ngx-lc-table-column.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NgxLcTableComponent,
    NgxLcTableHeaderComponent,
    NgxLcTableFooterComponent,
    NgxLcTableColumnComponent,
    NgxLcTableRowComponent,
    NgxLcTableFooterDirective,
    NgxLcTableHeaderDirective,
    NgxLcTableRowDirective,
    NgxLcTableColumnDirective
  ],
  exports: [NgxLcTableComponent,
    NgxLcTableColumnComponent,
    NgxLcTableHeaderComponent,
    NgxLcTableRowComponent,
    NgxLcTableFooterDirective,
    NgxLcTableHeaderDirective,
    NgxLcTableRowDirective,
    NgxLcTableColumnDirective],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NgxLcTableModule {
}
