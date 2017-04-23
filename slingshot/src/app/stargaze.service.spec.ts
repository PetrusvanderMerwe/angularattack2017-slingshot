import { TestBed, inject } from '@angular/core/testing';

import { StargazeService } from './stargaze.service';

describe('StargazeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StargazeService]
    });
  });

  it('should ...', inject([StargazeService], (service: StargazeService) => {
    expect(service).toBeTruthy();
  }));
});
