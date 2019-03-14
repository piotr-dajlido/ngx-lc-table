import {Directive, forwardRef, TemplateRef} from '@angular/core';
import {NGX_LC_ALIGNABLE_COMPONENT, NgxLcAlignable} from '../ngx-lc-table-alignment/ngx-lc-alignable';

@Directive({
  selector: '[ngxLcTableHeader]',
  providers: [{provide: NGX_LC_ALIGNABLE_COMPONENT, useExisting: forwardRef(() => NgxLcTableHeaderDirective)}]
})
export class NgxLcTableHeaderDirective extends NgxLcAlignable {
  constructor(public templateRef: TemplateRef<any>) {
    super();
  }
}
