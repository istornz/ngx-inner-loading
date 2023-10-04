import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgxInnerLoadingModule } from '../../projects/ngx-inner-loading/src/lib/ngx-inner-loading.module';
import { NgxInnerLoadingComponent } from '../../projects/ngx-inner-loading/src/public-api';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [NgxInnerLoadingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'NgxInnerLoading'`, () => {
    expect(app.title).toEqual('NgxInnerLoading');
  });

  it('should render ngx inner loading component', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('ngx-inner-loading')).toBeTruthy();
  });

  describe('Loading child', function () {
    beforeEach(function () {
      fixture.detectChanges();
      const ngxInnerLoading: NgxInnerLoadingComponent =
        fixture.debugElement.query(
          By.css('ngx-inner-loading')
        ).componentInstance;
      ngxInnerLoading.empty = false;
      ngxInnerLoading.error = false;
      ngxInnerLoading.loading = true;
      fixture.detectChanges();
    });

    it('should render ngx loading child', () => {
      const loadingElement =
        fixture.debugElement.nativeElement.querySelector('ngx-loading');
      expect(loadingElement).toBeTruthy();
    });

    it('should render ngx loading child custom description', () => {
      const loadingDescriptionText =
        fixture.debugElement.nativeElement.querySelector(
          '.spinner-description'
        ).textContent;
      expect(loadingDescriptionText).toContain('Loading ...');

      const ngxInnerLoading: NgxInnerLoadingComponent =
        fixture.debugElement.query(
          By.css('ngx-inner-loading')
        ).componentInstance;
      ngxInnerLoading.loadingDescription = 'Custom description';
      fixture.detectChanges();

      const loadingDescriptionTextCustom =
        fixture.debugElement.nativeElement.querySelector(
          '.spinner-description'
        ).textContent;
      expect(loadingDescriptionTextCustom).toContain('Custom description');
    });
  });

  describe('Error child', function () {
    beforeEach(function () {
      fixture.detectChanges();
      const ngxInnerLoading: NgxInnerLoadingComponent =
        fixture.debugElement.query(
          By.css('ngx-inner-loading')
        ).componentInstance;
      ngxInnerLoading.empty = false;
      ngxInnerLoading.error = true;
      ngxInnerLoading.loading = false;
      fixture.detectChanges();
    });

    it('should render ngx error child', () => {
      const errorElement =
        fixture.debugElement.nativeElement.querySelector('ngx-error');
      expect(errorElement).toBeTruthy();
    });

    it('should render ngx error child custom description', () => {
      const errorDescriptionText =
        fixture.debugElement.nativeElement.querySelector(
          '.error-description'
        ).textContent;
      expect(errorDescriptionText).toContain(
        'An error occurred, please try again later ...'
      );

      const ngxInnerLoading: NgxInnerLoadingComponent =
        fixture.debugElement.query(
          By.css('ngx-inner-loading')
        ).componentInstance;
      ngxInnerLoading.errorDescription = 'Custom description';
      fixture.detectChanges();

      const errorDescriptionTextCustom =
        fixture.debugElement.nativeElement.querySelector(
          '.error-description'
        ).textContent;
      expect(errorDescriptionTextCustom).toContain('Custom description');
    });

    it('should render ngx error child retry button', () => {
      fixture.detectChanges();

      const ngxInnerLoading: NgxInnerLoadingComponent =
        fixture.debugElement.query(
          By.css('ngx-inner-loading')
        ).componentInstance;

      ngxInnerLoading.retry.subscribe(() => {});
      fixture.detectChanges();

      const retryButtonVisible =
        fixture.debugElement.nativeElement.querySelector('.retry-button');
      expect(retryButtonVisible).toBeTruthy();
      expect(ngxInnerLoading.isRetryButtonVisible).toBeTruthy();

      ngxInnerLoading.retry.unsubscribe();
      fixture.detectChanges();
      expect(ngxInnerLoading.isRetryButtonVisible).toBeFalsy();

      const retryButton =
        fixture.debugElement.nativeElement.querySelector('.retry-button');
      expect(retryButton).toBeFalsy();
    });

    it('should render ngx error child custom retry button text', () => {
      const retryButtonText =
        fixture.debugElement.nativeElement.querySelector('.retry-button')
          .textContent;
      expect(retryButtonText).toContain('Retry');

      const ngxInnerLoading: NgxInnerLoadingComponent =
        fixture.debugElement.query(
          By.css('ngx-inner-loading')
        ).componentInstance;
      ngxInnerLoading.retryButtonText = 'Custom text';
      fixture.detectChanges();

      const retryButtonTextCustom =
        fixture.debugElement.nativeElement.querySelector('.retry-button')
          .textContent;
      expect(retryButtonTextCustom).toContain('Custom text');
    });
  });

  describe('Empty child', function () {
    beforeEach(function () {
      fixture.detectChanges();
      const ngxInnerLoading: NgxInnerLoadingComponent =
        fixture.debugElement.query(
          By.css('ngx-inner-loading')
        ).componentInstance;
      ngxInnerLoading.empty = true;
      ngxInnerLoading.error = false;
      ngxInnerLoading.loading = false;
      fixture.detectChanges();
    });

    it('should render ngx empty child', () => {
      const errorElement =
        fixture.debugElement.nativeElement.querySelector('ngx-empty');
      expect(errorElement).toBeTruthy();
    });

    it('should render ngx empty child custom description', () => {
      const emptyDescriptionText =
        fixture.debugElement.nativeElement.querySelector(
          '.empty-description'
        ).textContent;
      expect(emptyDescriptionText).toContain('No element ...');

      const ngxInnerLoading: NgxInnerLoadingComponent =
        fixture.debugElement.query(
          By.css('ngx-inner-loading')
        ).componentInstance;
      ngxInnerLoading.emptyDescription = 'Custom description';
      fixture.detectChanges();

      const emptyDescriptionTextCustom =
        fixture.debugElement.nativeElement.querySelector(
          '.empty-description'
        ).textContent;
      expect(emptyDescriptionTextCustom).toContain('Custom description');
    });
  });
});
