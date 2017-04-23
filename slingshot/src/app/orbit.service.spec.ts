import { TestBed, inject } from '@angular/core/testing';

import { OrbitService } from './orbit.service';

describe('OrbitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrbitService]
    });
  });

  it('should ...', inject([OrbitService], (service: OrbitService) => {
    expect(service).toBeTruthy();
  }));
});
