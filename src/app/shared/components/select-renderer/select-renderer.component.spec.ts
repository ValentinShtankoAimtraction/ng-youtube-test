import {AgGridModule} from '@ag-grid-community/angular';
import {ICellRendererParams, RowNode} from '@ag-grid-community/core';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {SelectRendererComponent} from './select-renderer.component';

describe('SelectRendererComponent', () => {
  let component: SelectRendererComponent;
  let fixture: ComponentFixture<SelectRendererComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SelectRendererComponent],
      imports: [MatCheckboxModule, AgGridModule.withComponents([SelectRendererComponent])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set checked status', () => {
    const node = {isSelected: () => true};
    component.agInit({node});
    expect(component.checked).toBeTruthy();
  });

  it('should refresh params', () => {
    const node = {isSelected: () => true};
    component.agInit({node});
    const refreshNode = {isSelected: () => false};
    component.refresh({node: refreshNode} as ICellRendererParams);
    expect(component.checked).toBeFalsy();
  });

  it('should change selection status', () => {
    component.node = {
      setSelected: (newValue: boolean, clearSelection?: boolean, suppressFinishActions?: boolean) => {
      }
    } as RowNode;
    const spy = spyOn(component.node, 'setSelected');
    component.changeSelection({checked: true});
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(true);
  });
});
