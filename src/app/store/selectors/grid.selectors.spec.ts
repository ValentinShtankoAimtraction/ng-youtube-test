import {State} from '../index';
import {getMockStoreState} from '../mockstore';
import * as fromSelectors from 'src/app/store/selectors';

describe('[Store] Grid selectors', () => {
  const initialState: State = getMockStoreState();

  it('should select the active selection status', () => {
    const result = fromSelectors.isActiveSelection.projector(initialState.grid);

    expect(result).toBe(initialState.grid.isActiveSelection);
  });

  it('should select the count', () => {
    const result = fromSelectors.getCount.projector(initialState.grid);

    expect(result).toBe(initialState.grid.count);
  });
});
