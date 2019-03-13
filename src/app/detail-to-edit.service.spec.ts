import { TestBed } from '@angular/core/testing';

import { DetailToEditService } from './detail-to-edit.service';

describe('DetailToEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailToEditService = TestBed.get(DetailToEditService);
    expect(service).toBeTruthy();
  });
});
