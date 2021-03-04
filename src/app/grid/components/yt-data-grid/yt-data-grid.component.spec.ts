import {AgGridModule} from '@ag-grid-community/angular';
import {ClientSideRowModelModule} from '@ag-grid-community/client-side-row-model';
import {ModuleRegistry} from '@ag-grid-community/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatCardModule} from '@angular/material/card';
import {DtImageColumnComponent} from 'src/app/grid/components';
import {IDtItem} from 'src/app/models';

import {YtDataGridComponent} from './yt-data-grid.component';

describe('YtDataGridComponent', () => {
  let component: YtDataGridComponent;
  let fixture: ComponentFixture<YtDataGridComponent>;

  beforeEach(async () => {
    await ModuleRegistry.registerModules([
      ClientSideRowModelModule,
      // MenuModule
    ]);
    await TestBed.configureTestingModule({
      declarations: [YtDataGridComponent, DtImageColumnComponent],
      imports: [AgGridModule.withComponents([]), MatCardModule],
      providers: []
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YtDataGridComponent);
    component = fixture.componentInstance;
    component.selectedItems = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable select column', () => {
    component.isActiveSelection = true;
    let columns = component.ytGrid.columnApi.getAllColumns();
    expect(columns.length).toBe(5);
  });

  it('should enable select column', () => {
    component.isActiveSelection = false;
    let columns = component.ytGrid.columnApi.getAllColumns();
    expect(columns.length).toBe(4);
  });

  it('should select item', () => {
    spyOn(component.selectItem, 'emit');
    let mockItem: IDtItem = {
      id: 'mockItem',
      title: '',
      thumbnail: '',
      publishedAt: '',
      description: ''
    };
    component.onRowSelected({data: mockItem});
    expect(component.selectItem.emit).toHaveBeenCalled();
    expect(component.selectItem.emit).toHaveBeenCalledWith('mockItem');
  });

  it('should unselect item', () => {
    spyOn(component.unselectItem, 'emit');
    component.selectedItems = ['mockItem'];
    let mockItem: IDtItem = {
      id: 'mockItem',
      title: '',
      thumbnail: '',
      publishedAt: '',
      description: ''
    };
    component.onRowSelected({data: mockItem});
    expect(component.unselectItem.emit).toHaveBeenCalled();
    expect(component.unselectItem.emit).toHaveBeenCalledWith('mockItem');
  });
});
