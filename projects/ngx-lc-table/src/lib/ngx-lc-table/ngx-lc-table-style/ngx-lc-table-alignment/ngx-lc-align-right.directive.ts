import {Directive, Inject, Optional, Self} from '@angular/core';
import {mergeStyles, NGX_LC_COMPONENT_WITH_STYLE, NgxLcWithStyle} from '../ngx-lc-with-style';

@Directive({
  selector: '[ngxLcAlignRight]'
})
export class NgxLcAlignRightDirective {

  style = {
    'justifyContent': 'flex-end',
    'text-align': 'right'
  };

  constructor(@Optional() @Self() @Inject(NGX_LC_COMPONENT_WITH_STYLE) private ngxLcWithStyle: NgxLcWithStyle) {
    mergeStyles(ngxLcWithStyle, this.style);
  }

}

