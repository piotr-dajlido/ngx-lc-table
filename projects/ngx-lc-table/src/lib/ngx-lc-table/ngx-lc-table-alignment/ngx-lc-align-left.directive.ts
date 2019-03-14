import {Directive, Host} from '@angular/core';
import {NgxLcTableColumnComponent} from '../ngx-lc-table-column/ngx-lc-table-column.component';

@Directive({
  selector: '[ngxLcAlignLeft]'
})
export class NgxLcAlignLeftDirective {

  style = {
    'justifyContent': 'flex-start'
  };

  constructor(@Host() private ngxLcTableColumn: NgxLcTableColumnComponent) {
    Object.assign(this.ngxLcTableColumn.style, this.style);
  }
}
