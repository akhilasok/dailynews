import { TestBed, inject } from '@angular/core/testing';

import { LoadnewsService } from './loadnews.service';

describe('LoadnewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadnewsService]
    });
  });

  it('should be created', inject([LoadnewsService], (service: LoadnewsService) => {
    expect(service).toBeTruthy();
  }));
});
