import {ICellRendererParams} from '@ag-grid-community/core';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ImageRendererComponent} from './image-renderer.component';

describe('ImageRendererComponent', () => {
  let component: ImageRendererComponent;
  let fixture: ComponentFixture<ImageRendererComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ImageRendererComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize image attribute', () => {
    const mockLink = 'http://mock.link';
    component.agInit(<ICellRendererParams>{value: mockLink});
    expect(component.value).toBe(mockLink);
  });

  it('should refresh image attribute', () => {
    const mockLink = 'http://mock.link.jest';
    component.refresh(<ICellRendererParams>{value: mockLink});
    expect(component.value).toBe(mockLink);
  });
});
