import {Directive, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: '[ngxLcTableRow]'
})
export class NgxLcTableRowDirective {

  @Input() height;
  constructor(public templateRef: TemplateRef<any>) {
  }

}
