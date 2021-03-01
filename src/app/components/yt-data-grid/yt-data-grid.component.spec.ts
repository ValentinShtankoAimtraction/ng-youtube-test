import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtDataGridComponent } from './yt-data-grid.component';

describe('YtDataGridComponent', () => {
  let component: YtDataGridComponent;
  let fixture: ComponentFixture<YtDataGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YtDataGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YtDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
