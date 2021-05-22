import { TestBed } from '@angular/core/testing';

import { ClasseMatService } from './classe-mat.service';

describe('ClasseMatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClasseMatService = TestBed.get(ClasseMatService);
    expect(service).toBeTruthy();
  });
});
