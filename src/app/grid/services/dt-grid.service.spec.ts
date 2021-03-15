import { TestBed } from '@angular/core/testing';

import { DtGridService } from './dt-grid.service';

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

  it('should return context menu', () => {
    let mockParams = {
      column: {
        colId: 'title'
      },
      node: {
        data: {
          id: 'mockItemId'
        }
      }
    };
    let contextMenu = service.getContextMenuItems(mockParams);
    expect(contextMenu[0].name).toBe('Open in new tab');
  });

  it('should open video on new tab', () => {
    spyOn( window, 'open' ).and.callFake( function() {
      return true;
    } );
    let mockParams = {
      column: {
        colId: 'title'
      },
      node: {
        data: {
          id: 'mockItemId'
        }
      }
    };
    let contextMenu = service.getContextMenuItems(mockParams);
    contextMenu[0].action();
    expect(window.open).toHaveBeenCalled();
    expect(window.open).toHaveBeenCalledWith(`https://www.youtube.com/watch?v=${mockParams.node.data.id}`, '_blank');
  })
});
