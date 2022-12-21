import { TestBed } from '@angular/core/testing';

import { MassimoService } from './massimo.service';

describe('MassimoService', () => {
  let service: MassimoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MassimoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
