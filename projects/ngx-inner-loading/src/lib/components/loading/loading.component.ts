import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  @Input() description?: string;
}
