import {TestBed} from '@angular/core/testing';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {YtGridContainerComponent} from 'src/app/grid/containers/yt-grid-container/yt-grid-container.component';
import {GridModule} from 'src/app/grid/grid.module';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
  let store: MockStore;
  const initialState = {
    isActiveSelection: true
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        GridModule
      ],
      providers: [
        provideMockStore({initialState})
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    store = TestBed.inject(MockStore);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
