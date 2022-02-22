import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  @Input() description?: string;
  @Input() retryButtonVisible?: boolean;
  @Output() retry = new EventEmitter<void>();

  onRetry(): void {
    this.retry?.emit();
  }

  get isRetryButtonVisible(): boolean {
    return this.retryButtonVisible ?? this.retry?.observed;
  }
}
