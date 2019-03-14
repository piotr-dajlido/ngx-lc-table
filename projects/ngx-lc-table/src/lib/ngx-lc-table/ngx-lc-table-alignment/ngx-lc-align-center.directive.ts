import {Directive, Host} from '@angular/core';
import {NgxLcTableColumnComponent} from '../ngx-lc-table-column/ngx-lc-table-column.component';

@Directive({
  selector: '[ngxLcAlignCenter]'
})
export class NgxLcAlignCenterDirective {

  style = {
    'justifyContent': 'center'
  };

  constructor(@Host() private ngxLcTableColumn: NgxLcTableColumnComponent) {
    Object.assign(this.ngxLcTableColumn.style, this.style);
  }
}
