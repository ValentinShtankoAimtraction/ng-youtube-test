import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {YtGridToolbarComponent} from './yt-grid-toolbar.component';

describe('YtGridToolbarComponent', () => {
  let component: YtGridToolbarComponent;
  let fixture: ComponentFixture<YtGridToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YtGridToolbarComponent],
      imports: [MatSlideToggleModule, MatCardModule]
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
