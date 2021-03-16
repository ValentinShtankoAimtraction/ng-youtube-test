import {GridApi, IHeaderParams} from '@ag-grid-community/core';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {SelectHeaderRendererComponent} from './select-header-renderer.component';

describe('SelectHeaderRendererComponent', () => {
  let component: SelectHeaderRendererComponent;
  let fixture: ComponentFixture<SelectHeaderRendererComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SelectHeaderRendererComponent],
      imports: [MatCheckboxModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectHeaderRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.afterGuiAttached();
    expect(component).toBeTruthy();
  });

  it('should be return disable refresh state', () => {
    expect(component.refresh({} as IHeaderParams)).toBeFalsy();
  });

  it('should select emit selectAll event', () => {
    component.gridApi = ({
      selectAll: () => {
      }
    } as GridApi);
    const spy = spyOn(component.gridApi, 'selectAll');
    component.selectAll();
    expect(spy).toHaveBeenCalled();
  });

  it('should select emit unselectAll event', () => {
    component.gridApi = ({
      deselectAll: () => {
      }
    } as GridApi);
    const spy = spyOn(component.gridApi, 'deselectAll');
    component.unselectAll();
    expect(spy).toHaveBeenCalled();
  });
});
