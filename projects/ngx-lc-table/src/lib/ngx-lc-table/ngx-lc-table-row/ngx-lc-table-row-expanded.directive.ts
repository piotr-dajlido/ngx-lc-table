import {Directive, forwardRef, TemplateRef} from '@angular/core';
import {NGX_LC_COMPONENT_WITH_STYLE, NgxLcWithStyle} from '../ngx-lc-table-style/ngx-lc-with-style';

@Directive({
  selector: '[ngxLcTableRowExpanded]',
  providers: [{provide: NGX_LC_COMPONENT_WITH_STYLE, useExisting: forwardRef(() => NgxLcTableRowExpandedDirective)}]
})
export class NgxLcTableRowExpandedDirective extends NgxLcWithStyle {
  constructor(public templateRef: TemplateRef<any>) {
    super();
  }

}
