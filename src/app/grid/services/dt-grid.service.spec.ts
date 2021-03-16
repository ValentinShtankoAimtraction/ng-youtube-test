import {TestBed} from '@angular/core/testing';

import {DtGridService} from './dt-grid.service';

describe('DtGridService', () => {
  let service: DtGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DtGridService
      ]
    });
    service = TestBed.inject(DtGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return context menu with link', () => {
    const mockParams = {
      column: {
        colId: 'title'
      },
      node: {
        data: {
          id: 'mockItemId'
        }
      }
    };
    const contextMenu = service.getContextMenuItems(mockParams);
    expect(contextMenu[0].name).toBe('Open in new tab');
  });

  it('should open video on new tab', () => {
    spyOn(window, 'open').and.callFake(() => true);
    const mockParams = {
      column: {
        colId: 'title'
      },
      node: {
        data: {
          id: 'mockItemId'
        }
      }
    };
    const contextMenu = service.getContextMenuItems(mockParams);
    contextMenu[0].action();
    expect(window.open).toHaveBeenCalled();
    expect(window.open).toHaveBeenCalledWith(`https://www.youtube.com/watch?v=${mockParams.node.data.id}`, '_blank');
  });

  it('should return context menu with copy, copy with header and paste', () => {
    const mockParams = {
      column: {
        colId: 'thumbnail'
      },
      node: {
        data: {
          id: 'mockItemId'
        }
      }
    };
    const contextMenu = service.getContextMenuItems(mockParams);
    expect(contextMenu.length).toBe(3);
  });

});
