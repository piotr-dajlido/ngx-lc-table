import {InjectionToken} from '@angular/core';

export class NgxLcWithStyle {
  style: any = null;
}

export const NGX_LC_COMPONENT_WITH_STYLE =
  new InjectionToken<NgxLcWithStyle>('Token for components that are able to align its content');

export function mergeStyles(component: NgxLcWithStyle, style: any) {
  if (component) {
    setTimeout(() => {
      component.style = component.style || {};
      component.style = {...component.style, ...style};
    });
  }
}
