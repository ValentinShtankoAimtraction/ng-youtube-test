import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dt-image-column',
  templateUrl: './dt-image-column.component.html',
  styleUrls: ['./dt-image-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DtImageColumnComponent {
  params;
  constructor() { }

  agInit(params: any): void {
    this.params = params;
  }
}
