import { TestBed } from '@angular/core/testing';

import { IscriptionService } from './iscription.service';

describe('IscriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IscriptionService = TestBed.get(IscriptionService);
    expect(service).toBeTruthy();
  });
});
