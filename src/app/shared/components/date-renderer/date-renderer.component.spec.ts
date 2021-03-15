import {ICellRendererParams} from '@ag-grid-community/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DateRendererComponent} from './date-renderer.component';

describe('DateRendererComponent', () => {
  let component: DateRendererComponent;
  let fixture: ComponentFixture<DateRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateRendererComponent]
    })
      .compileComponents();
  });

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
    component.agInit(<ICellRendererParams>{value: mockDate});
    expect(component.value).toBe(mockDate);
  });

  it('should refresh date attribute', () => {
    const mockDate = '2021-01-01T00:00:01Z';
    component.refresh(<ICellRendererParams>{value: mockDate});
    expect(component.value).toBe(mockDate);
  });
});
