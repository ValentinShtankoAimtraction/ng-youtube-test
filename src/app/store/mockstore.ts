import {State} from './index';

export const getMockStoreState = (): State => {
  return {
    video: {
      ids: [
        'test1',
        'test2',
        'test3',
        'test4',
        'test5'
      ],
      entities: {
        test1: {
          id: 'test1',
          title: 'test1',
          description: 'test1',
          publishedAt: 'test1',
          thumbnail: 'test1'
        },
        test2: {
          id: 'test2',
          title: 'test2',
          description: 'test2',
          publishedAt: 'test2',
          thumbnail: 'test2'
        },
        test3: {
          id: 'test3',
          title: 'test3',
          description: 'test3',
          publishedAt: 'test3',
          thumbnail: 'test3'
        },
        test4: {
          id: 'test4',
          title: 'test4',
          description: 'test4',
          publishedAt: 'test4',
          thumbnail: 'test4'
        },
        test5: {
          id: 'test5',
          title: 'test5',
          description: 'test5',
          publishedAt: 'test5',
          thumbnail: 'test5'
        },
      },
      loaded: true,
      loading: false,
      error: null,
      selectedVideos: []
    },
    grid: {
      isActiveSelection: true,
      count: 5
    }
  };
};
