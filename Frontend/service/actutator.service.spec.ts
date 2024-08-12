import { TestBed } from '@angular/core/testing';

import { ActutatorService } from './actutator.service';

describe('ActutatorService', () => {
  let service: ActutatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActutatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
