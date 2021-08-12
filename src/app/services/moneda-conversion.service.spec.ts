import { TestBed } from '@angular/core/testing';

import { MonedaConversionService } from './moneda-conversion.service';

describe('MonedaConversionService', () => {
  let service: MonedaConversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonedaConversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
