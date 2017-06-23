import { TestBed, inject } from '@angular/core/testing';

import { BooksStoreManagerService } from './books-store-manager.service';

describe('BooksStoreManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksStoreManagerService]
    });
  });

  it('should be created', inject([BooksStoreManagerService], (service: BooksStoreManagerService) => {
    expect(service).toBeTruthy();
  }));
});
