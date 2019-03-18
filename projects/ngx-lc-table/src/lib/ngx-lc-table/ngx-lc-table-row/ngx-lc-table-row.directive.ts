import {Directive, forwardRef, TemplateRef} from '@angular/core';
import {NGX_LC_ALIGNABLE_COMPONENT, NgxLcAlignable} from '../ngx-lc-table-alignment/ngx-lc-alignable';

@Directive({
  selector: '[ngxLcTableRow]',
  providers: [{provide: NGX_LC_ALIGNABLE_COMPONENT, useExisting: forwardRef(() => NgxLcTableRowDirective)}]
})
export class NgxLcTableRowDirective extends NgxLcAlignable {
  constructor(public templateRef: TemplateRef<any>) {
    super();
  }

}
