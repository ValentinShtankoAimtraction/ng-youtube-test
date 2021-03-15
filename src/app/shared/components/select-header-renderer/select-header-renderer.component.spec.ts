import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {SelectHeaderRendererComponent} from './select-header-renderer.component';

describe('SelectHeaderRendererComponent', () => {
  let component: SelectHeaderRendererComponent;
  let fixture: ComponentFixture<SelectHeaderRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectHeaderRendererComponent],
      imports: [MatCheckboxModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectHeaderRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
