import { NgModule } from '@angular/core';
import { NgxInnerLoadingComponent } from './ngx-inner-loading.component';
import { EmptyComponent } from './components/empty/empty.component';
import { ErrorComponent } from './components/error/error.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NgxInnerLoadingComponent,
    EmptyComponent,
    ErrorComponent,
    LoadingComponent,
  ],
  exports: [NgxInnerLoadingComponent],
  imports: [CommonModule],
})
export class NgxInnerLoadingModule {}
