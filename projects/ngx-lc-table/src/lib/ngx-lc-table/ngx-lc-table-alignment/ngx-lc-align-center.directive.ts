import {Directive, Inject, Optional, Self} from '@angular/core';
import {NGX_LC_ALIGNABLE_COMPONENT, NgxLcAlignable} from './ngx-lc-alignable';

@Directive({
  selector: '[ngxLcAlignCenter]'
})
export class NgxLcAlignCenterDirective {

  style = {
    'justifyContent': 'center',
    'text-align': 'center'
  };

  constructor(@Optional() @Self() @Inject(NGX_LC_ALIGNABLE_COMPONENT) private ngxLcAlignable: NgxLcAlignable) {
    if (ngxLcAlignable) {
      this.ngxLcAlignable.style = {};
      Object.assign(this.ngxLcAlignable.style, this.style);
    }
  }
}
