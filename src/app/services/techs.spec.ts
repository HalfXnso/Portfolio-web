import { TestBed } from '@angular/core/testing';

import { Techs } from './techs';

describe('Techs', () => {
  let service: Techs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Techs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
