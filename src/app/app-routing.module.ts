import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {SandboxComponent} from './sandbox/sandbox.component';
import {MinimalComponent} from './minimal/minimal.component';

const appRoutes: Route[] = [
  {path: 'sandbox', component: SandboxComponent},
  {path: 'minimal', component: MinimalComponent}

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
