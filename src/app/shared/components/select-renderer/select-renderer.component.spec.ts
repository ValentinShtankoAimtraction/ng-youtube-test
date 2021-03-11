import {AgGridModule} from '@ag-grid-community/angular';
import {RowNode} from '@ag-grid-community/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {SelectRendererComponent} from './select-renderer.component';

describe('SelectRendererComponent', () => {
  let component: SelectRendererComponent;
  let fixture: ComponentFixture<SelectRendererComponent>;
  let node: RowNode;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectRendererComponent],
      imports: [MatCheckboxModule, AgGridModule.withComponents([SelectRendererComponent])]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
