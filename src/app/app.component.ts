import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'NgxInnerLoading';

  protected isLoading = false;
  protected isEmpty = true;
  protected isError = true;

  retry() {
    console.log('Retry');
  }

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }

  toggleEmpty() {
    this.isEmpty = !this.isEmpty;
  }

  toggleError() {
    this.isError = !this.isError;
  }
}
