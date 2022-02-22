import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInnerLoadingComponent } from './ngx-inner-loading.component';

describe('NgxInnerLoadingComponent', () => {
  let component: NgxInnerLoadingComponent;
  let fixture: ComponentFixture<NgxInnerLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxInnerLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxInnerLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
