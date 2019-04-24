import {Directive, forwardRef, TemplateRef} from '@angular/core';
import {NGX_LC_COMPONENT_WITH_STYLE, NgxLcWithStyle} from '../ngx-lc-table-style/ngx-lc-with-style';

@Directive({
  selector: '[ngxLcTableFooter]',
  providers: [{provide: NGX_LC_COMPONENT_WITH_STYLE, useExisting: forwardRef(() => NgxLcTableFooterDirective)}]
})
export class NgxLcTableFooterDirective extends NgxLcWithStyle {
  constructor(public templateRef: TemplateRef<any>) {
    super();
  }
}
