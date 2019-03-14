import {InjectionToken} from '@angular/core';

export class NgxLcAlignable {
  style: any = {};
}

export const NGX_LC_ALIGNABLE_COMPONENT =
  new InjectionToken<NgxLcAlignable>('Token for components that are able to align its content');
