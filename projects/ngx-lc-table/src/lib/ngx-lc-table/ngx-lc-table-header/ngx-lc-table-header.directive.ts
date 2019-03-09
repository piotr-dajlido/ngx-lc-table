import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[ngxLcTableHeader]'
})
export class NgxLcTableHeaderDirective {
  constructor(public templateRef: TemplateRef<any>) {
  }
}
