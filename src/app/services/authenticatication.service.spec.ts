import { TestBed } from '@angular/core/testing';

import { AuthenticaticationService } from './authenticatication.service';

describe('AuthenticaticationService', () => {
  let service: AuthenticaticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticaticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
