import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { SlicesComponent } from './slices/slices.component';
import { MapToIterablePipe } from './pipes/map-to-iterable.pipe';
import { SliceComponent } from './slice/slice.component';
import { WeatherService } from './weather/weather.service';
import { HttpModule } from '@angular/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [AppComponent, SlicesComponent, SliceComponent, MapToIterablePipe],
      providers: [WeatherService]
    }).compileComponents();
  }));

  it('should be created', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
