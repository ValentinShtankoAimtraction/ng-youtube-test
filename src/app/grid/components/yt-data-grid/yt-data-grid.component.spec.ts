import {AgGridModule} from '@ag-grid-community/angular';
import {ClientSideRowModelModule} from '@ag-grid-community/client-side-row-model';
import {ModuleRegistry} from '@ag-grid-community/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {RENDERER_COMPONENTS} from 'src/app/shared/components';
import {getMockItems} from 'src/app/utils/testing/mock-items';

import {YtDataGridComponent} from './yt-data-grid.component';

describe('YtDataGridComponent', () => {
  let component: YtDataGridComponent;
  let fixture: ComponentFixture<YtDataGridComponent>;

  beforeEach(async () => {
    await ModuleRegistry.registerModules([
      ClientSideRowModelModule,
    ]);
    await TestBed.configureTestingModule({
      declarations: [YtDataGridComponent, RENDERER_COMPONENTS],
      imports: [AgGridModule.withComponents([RENDERER_COMPONENTS]), MatCardModule, MatCheckboxModule],
      providers: []
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YtDataGridComponent);
    component = fixture.componentInstance;
    component.selectedItems = [];
    component.items = getMockItems();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should enable select column', () => {
    component.isActiveSelection = true;
    expect(component.ytGrid.columnApi.getColumn('selected').isVisible()).toBeTruthy();
  });

  it('should disable select column', () => {
    component.isActiveSelection = false;
    expect(component.ytGrid.columnApi.getColumn('selected').isVisible()).toBeFalsy();
  });

  it('should select item', () => {
    spyOn(component.selectItem, 'emit');

    let api = component.ytGrid.api;
    api.getRowNode('test1').setSelected(true);

    component.onSelectionChanged({api});
    expect(component.selectItem.emit).toHaveBeenCalled();
    expect(component.selectItem.emit).toHaveBeenCalledWith('test1');
  });

  it('should unselect item', () => {
    spyOn(component.unselectItem, 'emit');
    component.selectedItems = ['test2'];

    let api = component.ytGrid.api;

    api.getRowNode('test2').setSelected(false);
    component.onSelectionChanged({api});

    expect(component.unselectItem.emit).toHaveBeenCalled();
    expect(component.unselectItem.emit).toHaveBeenCalledWith('test2');
  });

  it('should select all items', () => {
    let spy = spyOn(component.selectAll, 'emit');
    let api = component.ytGrid.api;

    api.selectAll();

    component.onSelectionChanged({api});

    expect(spy).toHaveBeenCalled();
  });

  it('should select all items', () => {
    let spy = spyOn(component.unselectAll, 'emit');
    let api = component.ytGrid.api;
    component.selectedItems = ['test1', 'test2', 'test3', 'test4', 'test5'];
    api.deselectAll();

    component.onSelectionChanged({api});

    expect(spy).toHaveBeenCalled();
  });

  it('should deselect items after disable selection mode', () => {
    let spy = spyOn(component.ytGrid.api, 'deselectAll');
    component.selectedItems = ['test1', 'test2'];
    component.isActiveSelection = false;
    expect(spy).toHaveBeenCalled();
  });

  it('should call method sizeColumnsToFit from agGrid API', () => {
    let spy = spyOn(component.ytGrid.api, 'sizeColumnsToFit');
    component.fitColumns();
    expect(spy).toHaveBeenCalled();
  })
});
