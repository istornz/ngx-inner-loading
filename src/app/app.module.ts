import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxInnerLoadingModule } from '../../projects/ngx-inner-loading/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxInnerLoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
