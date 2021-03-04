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

  it('should be format data', () => {
    let mockDataString = '2020-01-29T14:00:02Z';
    let expectedDataString = new Date(mockDataString).toLocaleString();
    let formatedDate = service.dateFormatter({value: mockDataString});
    expect(formatedDate).toBe(expectedDataString);
  });

  it('should return context menu', () => {
    let mockParams = {
      node: {
        data: {
          id: 'mockItemId'
        }
      }
    };
    let contextMenu = service.getContextMenuItems(mockParams);
    expect(contextMenu[0].name).toBe('Copy URL');
  });

  it('should open video on new tab', () => {
    spyOn( window, 'open' ).and.callFake( function() {
      return true;
    } );
    let mockParams = {
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
