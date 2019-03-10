import {Component, ContentChildren, Input, OnInit, QueryList} from '@angular/core';
import {NgxLcTableHeaderDirective} from '../ngx-lc-table-header/ngx-lc-table-header.directive';
import {NgxLcTableRowDirective} from '../ngx-lc-table-row/ngx-lc-table-row.directive';

@Component({
  selector: 'ngx-lc-table-column',
  templateUrl: './ngx-lc-table-column.component.html',
  styleUrls: ['./ngx-lc-table-column.component.css']
})
export class NgxLcTableColumnComponent implements OnInit {

  @Input() prop: string | string[];

  @ContentChildren(NgxLcTableHeaderDirective) headers: QueryList<NgxLcTableHeaderDirective>;
  @ContentChildren(NgxLcTableRowDirective) rows: QueryList<NgxLcTableRowDirective>;

  constructor() {
  }

  ngOnInit() {
  }

}
