import * as fromSelectors from 'src/app/store/selectors';
import {State} from '../index';
import {getMockStoreState} from '../mockstore';

describe('[Store] Video selectors', () => {
  const initialState: State = getMockStoreState();

  it('should select the video list', () => {
    const result = fromSelectors.getVideos.projector(initialState.video.entities);

    expect(result.length).toBe(initialState.video.ids.length);
  });

  it('should select the loaded state', () => {
    const result = fromSelectors.getVideoLoaded.projector(initialState.video);

    expect(result).toBe(initialState.video.loaded);
  });

  it('should select the loading state', () => {
    const result = fromSelectors.getVideoLoading.projector(initialState.video);

    expect(result).toBe(initialState.video.loading);
  });

  it('should select the selected videos', () => {
    const result = fromSelectors.getSelectedVideos.projector(initialState.video);

    expect(result).toBe(initialState.video.selectedVideos);
  });

  it('should select the video error', () => {
    const result = fromSelectors.getVideoErrors.projector(initialState.video);

    expect(result).toBe(initialState.video.error);
  });
});
