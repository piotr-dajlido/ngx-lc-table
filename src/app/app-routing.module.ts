import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {SandboxComponent} from './sandbox/sandbox.component';
import {MinimalComponent} from './minimal/minimal.component';
import {SplitComponent} from './merge/split.component';

const appRoutes: Route[] = [
  {path: 'sandbox', component: SandboxComponent},
  {path: 'minimal', component: MinimalComponent},
  {path: 'split', component: SplitComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
