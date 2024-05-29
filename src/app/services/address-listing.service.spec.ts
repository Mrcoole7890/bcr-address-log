import { TestBed } from '@angular/core/testing';

import { AddressListingService } from './address-listing.service';

describe('AddressListingService', () => {
  let service: AddressListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
