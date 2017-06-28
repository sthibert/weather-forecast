import { async, TestBed } from '@angular/core/testing';

import { SlicesComponent } from './slices.component';
import { SliceComponent } from '../slice/slice.component';
import { MapToIterablePipe } from '../pipes/map-to-iterable.pipe';

describe('SlicesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SlicesComponent, SliceComponent, MapToIterablePipe]
    }).compileComponents();
  }));

  it('should be created', () => {
    const fixture = TestBed.createComponent(SlicesComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
