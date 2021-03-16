import {ICellRendererParams} from '@ag-grid-community/core';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {DateRendererComponent} from './date-renderer.component';

describe('DateRendererComponent', () => {
  let component: DateRendererComponent;
  let fixture: ComponentFixture<DateRendererComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DateRendererComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should initialize date attribute', () => {
    const mockDate = '2021-01-01T00:00:01Z';
    component.agInit({value: mockDate} as ICellRendererParams);
    expect(component.value).toBe(mockDate);
  });

  it('should refresh date attribute', () => {
    const mockDate = '2021-01-01T00:00:01Z';
    component.refresh({value: mockDate} as ICellRendererParams);
    expect(component.value).toBe(mockDate);
  });
});
