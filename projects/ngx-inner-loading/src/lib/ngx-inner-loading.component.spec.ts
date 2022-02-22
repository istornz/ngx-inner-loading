import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInnerLoadingComponent } from './ngx-inner-loading.component';
import { NgxInnerLoadingModule } from './ngx-inner-loading.module';

describe('NgxInnerLoadingComponent', () => {
  let component: NgxInnerLoadingComponent;
  let fixture: ComponentFixture<NgxInnerLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxInnerLoadingComponent],
      imports: [NgxInnerLoadingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxInnerLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error component on error', async () => {
    component.error = true;
    fixture.detectChanges();

    const errorComponent =
      fixture.debugElement.nativeElement.querySelector('ngx-error');
    expect(errorComponent).toBeTruthy();
  });

  it('should display empty component on empty data', async () => {
    component.empty = true;
    fixture.detectChanges();

    const emptyComponent =
      fixture.debugElement.nativeElement.querySelector('ngx-empty');
    expect(emptyComponent).toBeTruthy();
  });

  it('should display loading component on loading', async () => {
    component.loading = true;
    fixture.detectChanges();

    const loadingComponent =
      fixture.debugElement.nativeElement.querySelector('ngx-loading');
    expect(loadingComponent).toBeTruthy();
  });

  it('should display error message on custom description', async () => {
    component.error = true;
    component.errorDescription = 'Random description';
    fixture.detectChanges();

    const errorDescriptionText =
      fixture.debugElement.nativeElement.querySelector(
        '.error-description'
      ).textContent;
    expect(errorDescriptionText).toContain('Random description');
  });

  it('should display empty message on custom description', async () => {
    component.empty = true;
    component.emptyDescription = 'Random description';
    fixture.detectChanges();

    const emptyDescriptionText =
      fixture.debugElement.nativeElement.querySelector(
        '.empty-description'
      ).textContent;
    expect(emptyDescriptionText).toContain('Random description');
  });

  it('should display loading message on custom loading', async () => {
    component.loading = true;
    component.loadingDescription = 'Random description';
    fixture.detectChanges();

    const loadingDescriptionText =
      fixture.debugElement.nativeElement.querySelector(
        '.spinner-description'
      ).textContent;
    expect(loadingDescriptionText).toContain('Random description');
  });

  it('should display retry button on custom retry button text', async () => {
    component.error = true;
    component.retryButtonText = 'A retry button';
    component.retry.subscribe(() => {
      // do nothing
    });
    fixture.detectChanges();

    const retryButtonText =
      fixture.debugElement.nativeElement.querySelector(
        '.retry-button'
      ).textContent;
    expect(retryButtonText).toContain('A retry button');
  });

  it('should display retry button on retry emitter provided', async () => {
    component.error = true;
    fixture.detectChanges();

    let retryButton =
      fixture.debugElement.nativeElement.querySelector('.retry-button');
    expect(retryButton).toBeFalsy();

    component.error = true;
    component.retry.subscribe(() => {
      // do nothing
    });
    fixture.detectChanges();

    retryButton =
      fixture.debugElement.nativeElement.querySelector('.retry-button');
    expect(retryButton).toBeTruthy();
  });
});
