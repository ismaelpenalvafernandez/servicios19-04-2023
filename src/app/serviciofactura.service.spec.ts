import { TestBed } from '@angular/core/testing';

import { ServiciofacturaService } from './serviciofactura.service';

describe('ServiciofacturaService', () => {
  let service: ServiciofacturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciofacturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
