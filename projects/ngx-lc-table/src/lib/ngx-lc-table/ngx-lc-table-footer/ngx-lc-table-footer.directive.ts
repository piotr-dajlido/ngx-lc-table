import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[ngxLcTableFooter]'
})
export class NgxLcTableFooterDirective {
  constructor(public templateRef: TemplateRef<any>) {
  }
}
