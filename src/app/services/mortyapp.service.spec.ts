import { TestBed } from '@angular/core/testing';

import { MortyappService } from './mortyapp.service';

describe('MortyappService', () => {
  let service: MortyappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MortyappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
