import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent {
  @Input() description?: string;
}
