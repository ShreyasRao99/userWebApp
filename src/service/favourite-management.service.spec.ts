import { TestBed } from '@angular/core/testing';

import { FavouriteManagementService } from './favourite-management.service';

describe('FavouriteManagementService', () => {
  let service: FavouriteManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
