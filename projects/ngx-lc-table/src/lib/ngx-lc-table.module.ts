import { NgModule } from '@angular/core';
import { NgxLcTableHeaderComponent } from './ngx-lc-table/ngx-lc-table-header/ngx-lc-table-header.component';
import { NgxLcTableFooterComponent } from './ngx-lc-table/ngx-lc-table-footer/ngx-lc-table-footer.component';
import { NgxLcTableColumnComponent } from './ngx-lc-table/ngx-lc-table-column/ngx-lc-table-column.component';
import { NgxLcTableComponent } from './ngx-lc-table/ngx-lc-table.component';
import { NgxLcFooterDirective } from './ngx-lc-table/ngx-lc-table-footer/ngx-lc-footer.directive';
import { NgxLcTableFooterDirective } from './ngx-lc-table/ngx-lc-table-footer/ngx-lc-table-footer.directive';
import { NgxLcTableHeaderDirective } from './ngx-lc-table/ngx-lc-table-header/ngx-lc-table-header.directive';
import { NgxLcTableRowDirective } from './ngx-lc-table/ngx-lc-table-row/ngx-lc-table-row.directive';

@NgModule({
  imports: [
  ],
  declarations: [
    NgxLcTableComponent,
    NgxLcTableHeaderComponent,
    NgxLcTableFooterComponent,
    NgxLcTableColumnComponent,
    NgxLcFooterDirective,
    NgxLcTableFooterDirective,
    NgxLcTableHeaderDirective,
    NgxLcTableRowDirective
  ],
  exports: [NgxLcTableComponent]
})
export class NgxLcTableModule { }
