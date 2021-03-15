import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class NotificationService {

  constructor(private _snackBar: MatSnackBar) { }

  fetchSuccess(count: number) {
    this._snackBar.open(`Fetch success [${count} videos]`);
  }

  fetchError() {
    this._snackBar.open(`Fetch failure`);
  }

  selectItem(itemId, selected, count) {
    this._snackBar.open(`Selected [${itemId}]`, `${selected}/${count}`);
  }
  unselectItem(itemId, selected, count) {
    this._snackBar.open(`Unselected [${itemId}]`, `${selected}/${count}`);
  }

  selectAll() {
    this._snackBar.open(`Selected all videos`);
  }

  unselectAll() {
    this._snackBar.open(`Unselected all videos`);
  }
}
