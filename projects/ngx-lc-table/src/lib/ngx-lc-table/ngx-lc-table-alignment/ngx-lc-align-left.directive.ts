import {Directive, Inject, Optional} from '@angular/core';
import {NGX_LC_ALIGNABLE_COMPONENT, NgxLcAlignable} from './ngx-lc-alignable';

@Directive({
  selector: '[ngxLcAlignLeft]'
})
export class NgxLcAlignLeftDirective {

  style = {
    'justifyContent': 'flex-start',
    'text-align': 'left'
  };

  constructor(@Optional() @Inject(NGX_LC_ALIGNABLE_COMPONENT) private ngxLcAlignable: NgxLcAlignable) {
    if (ngxLcAlignable) {
      Object.assign(this.ngxLcAlignable.style, this.style);
    }
  }
}
