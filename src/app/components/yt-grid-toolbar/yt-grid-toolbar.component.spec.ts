import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtGridToolbarComponent } from './yt-grid-toolbar.component';

describe('YtGridToolbarComponent', () => {
  let component: YtGridToolbarComponent;
  let fixture: ComponentFixture<YtGridToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YtGridToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YtGridToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
