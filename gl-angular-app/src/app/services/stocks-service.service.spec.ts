/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StocksServiceService } from './stocks-service.service';

describe('Service: StocksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StocksServiceService]
    });
  });

  it('should ...', inject([StocksServiceService], (service: StocksServiceService) => {
    expect(service).toBeTruthy();
  }));
});
