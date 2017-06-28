import { async, TestBed } from '@angular/core/testing';

import { SliceComponent } from './slice.component';

describe('SliceComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SliceComponent]
    }).compileComponents();
  }));

  it('should be created', () => {
    const fixture = TestBed.createComponent(SliceComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
