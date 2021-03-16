import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class NotificationService {

  constructor(private _snackBar: MatSnackBar) {
  }

  fetchSuccess(count: number): void {
    this._snackBar.open(`Fetch success [${count} videos]`);
  }

  fetchError(): void {
    this._snackBar.open(`Fetch failure`);
  }

  selectItem(itemId: string, selected: number, count: number): void {
    this._snackBar.open(`Selected [${itemId}]`, `${selected}/${count}`);
  }

  unselectItem(itemId: string, selected: number, count: number): void {
    this._snackBar.open(`Unselected [${itemId}]`, `${selected}/${count}`);
  }

  selectAll(): void {
    this._snackBar.open(`Selected all videos`);
  }

  unselectAll(): void {
    this._snackBar.open(`Unselected all videos`);
  }
}
