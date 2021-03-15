import {TestBed} from '@angular/core/testing';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

import {NotificationService} from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;
  let snackbar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
      providers: [NotificationService]
    });
    service = TestBed.inject(NotificationService);
    snackbar = TestBed.inject(MatSnackBar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call fetchSuccess', () => {
    const spy = spyOn(snackbar, 'open');

    const count = 15;

    service.fetchSuccess(count);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(`Fetch success [${count} videos]`)
  });

  it('should call fetchError', () => {
    const spy = spyOn(snackbar, 'open');

    service.fetchError();

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(`Fetch failure`);
  });

  it('should call selectItem', () => {
    const spy = spyOn(snackbar, 'open');
    const itemId = 'test1';
    const selected = 1;
    const count = 50;
    service.selectItem(itemId, selected, count);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(`Selected [${itemId}]`, `${selected}/${count}`);
  });

  it('should call unselectItem', () => {
    const spy = spyOn(snackbar, 'open');
    const itemId = 'test1';
    const selected = 1;
    const count = 50;
    service.unselectItem(itemId, selected, count);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(`Unselected [${itemId}]`, `${selected}/${count}`);
  });

  it('should call selectAll', () => {
    const spy = spyOn(snackbar, 'open');
    service.selectAll();

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(`Selected all videos`);
  });

  it('should call unselectAll', () => {
    const spy = spyOn(snackbar, 'open');
    service.unselectAll();

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(`Unselected all videos`);
  });

});
