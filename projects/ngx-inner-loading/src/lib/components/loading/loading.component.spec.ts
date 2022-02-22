import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display default description', async () => {
    fixture.detectChanges();

    const descriptionText = fixture.debugElement.nativeElement.querySelector(
      '.spinner-description'
    ).textContent;
    expect(descriptionText).toContain('Loading ...');
  });

  it('should display custom description on provided', async () => {
    component.description = 'Random description';
    fixture.detectChanges();

    const descriptionText = fixture.debugElement.nativeElement.querySelector(
      '.spinner-description'
    ).textContent;
    expect(descriptionText).toContain('Random description');
  });
});
