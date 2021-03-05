import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DtImageColumnComponent} from './dt-image-column.component';

describe('DtImageColumnComponent', () => {
  let component: DtImageColumnComponent;
  let fixture: ComponentFixture<DtImageColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DtImageColumnComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtImageColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init params', () => {
    let params = {
      value: 'mockItem'
    };
    component.agInit(params);
    expect(component.params).toBe(params);
  });
});
