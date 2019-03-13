import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[ngxLcTableRowExpanded]'
})
export class NgxLcTableRowExpandedDirective {

  constructor(public templateRef: TemplateRef<any>) {
  }

}
