import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {GridModule} from 'src/app/grid/grid.module';

import {YtGridContainerComponent} from './yt-grid-container.component';

describe('YtGridContainerComponent', () => {
  let component: YtGridContainerComponent;
  let fixture: ComponentFixture<YtGridContainerComponent>;
  let store: MockStore;
  const initialState = {
    grid: {
      isActiveSelection: true
    },
    video: {
      items: []
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [GridModule],
      providers: [
        provideMockStore({initialState})
      ],
      schemas: []
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YtGridContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch toggleSelection action', () => {
    let dispatchSpy = spyOn(store, 'dispatch');
    component.toggleSelection(true);
    expect(dispatchSpy).toHaveBeenCalled();
  });

  it('should dispatch selectItem action', () => {
    let dispatchSpy = spyOn(store, 'dispatch');
    component.selectItem('mockItem');
    expect(dispatchSpy).toHaveBeenCalled();
  });

  it('should dispatch unselectItem action', () => {
    let dispatchSpy = spyOn(store, 'dispatch');
    component.unselectItem('mockItem');
    expect(dispatchSpy).toHaveBeenCalled();
  });

  it('should dispatch selectAll action', () => {
    let dispatchSpy = spyOn(store, 'dispatch');
    component.selectAll();
    expect(dispatchSpy).toHaveBeenCalled();
  });

  it('should dispatch unselectItem action', () => {
    let dispatchSpy = spyOn(store, 'dispatch');
    component.unselectAll();
    expect(dispatchSpy).toHaveBeenCalled();
  });
});
