import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-inner-loading',
  templateUrl: './ngx-inner-loading.component.html',
})
export class NgxInnerLoadingComponent {
  @Input() loading!: boolean;
  @Input() error!: boolean;
  @Input() empty!: boolean;

  @Input() loadingDescription?: string;
  @Input() errorDescription?: string;
  @Input() retryButtonText?: string;
  @Input() emptyDescription?: string;

  @Output() retry = new EventEmitter<void>();

  onRetryClick(): void {
    this.retry?.emit();
  }

  get isRetryButtonVisible(): boolean {
    return this.retry?.observed;
  }
}
