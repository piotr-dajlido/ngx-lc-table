import {Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {NgxLcTableColumnComponent} from './ngx-lc-table-column/ngx-lc-table-column.component';
import {NgxLcTableFooterComponent} from './ngx-lc-table-footer/ngx-lc-table-footer.component';
import {NgxLcTableHeaderComponent} from './ngx-lc-table-header/ngx-lc-table-header.component';

@Component({
  selector: 'ngx-lc-table',
  templateUrl: './ngx-lc-table.component.html',
  styleUrls: ['./ngx-lc-table.component.css']
})
export class NgxLcTableComponent implements OnInit {

  @ContentChildren(NgxLcTableColumnComponent) columns: QueryList<NgxLcTableColumnComponent>;
  @ContentChildren(NgxLcTableFooterComponent) footers: QueryList<NgxLcTableFooterComponent>;
  @ContentChildren(NgxLcTableHeaderComponent) headers: QueryList<NgxLcTableHeaderComponent>;

  constructor() { }

  ngOnInit() {
  }

}
