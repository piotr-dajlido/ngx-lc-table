import {Directive, Inject, Optional, Self} from '@angular/core';
import {NGX_LC_ALIGNABLE_COMPONENT, NgxLcAlignable} from './ngx-lc-alignable';

@Directive({
  selector: '[ngxLcAlignRight]'
})
export class NgxLcAlignRightDirective {

  style = {
    'justifyContent': 'flex-end',
    'text-align': 'right'
  };

  constructor(@Optional() @Self() @Inject(NGX_LC_ALIGNABLE_COMPONENT) private ngxLcAlignable: NgxLcAlignable) {
    if (ngxLcAlignable) {
      setTimeout(() => {
        this.ngxLcAlignable.style = {};
        Object.assign(this.ngxLcAlignable.style, this.style);
      });
    }
  }

}
