import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtGridContainerComponent } from './yt-grid-container.component';

describe('YtGridContainerComponent', () => {
  let component: YtGridContainerComponent;
  let fixture: ComponentFixture<YtGridContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YtGridContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YtGridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
