import { TestBed, inject } from '@angular/core/testing';

import { StardataService } from './stardata.service';

describe('StardataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StardataService]
    });
  });

  it('should ...', inject([StardataService], (service: StardataService) => {
    expect(service).toBeTruthy();
  }));
});
