import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SandboxComponent} from './sandbox/sandbox.component';
import {AppRoutingModule} from './app-routing.module';
import {NgxLcTableModule} from '../../projects/ngx-lc-table/src/lib/ngx-lc-table.module';

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent
  ],
  imports: [
    NgxLcTableModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
