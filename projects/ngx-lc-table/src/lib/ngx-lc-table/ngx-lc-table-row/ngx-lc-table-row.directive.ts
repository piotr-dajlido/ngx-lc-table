import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[ngxLcTableRow]'
})
export class NgxLcTableRowDirective {
  constructor(public templateRef: TemplateRef<any>) {
  }
}
