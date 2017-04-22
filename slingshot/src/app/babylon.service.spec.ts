import { TestBed, inject } from '@angular/core/testing';

import { BabylonService } from './babylon.service';

describe('BabylonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BabylonService]
    });
  });

  it('should ...', inject([BabylonService], (service: BabylonService) => {
    expect(service).toBeTruthy();
  }));
});
