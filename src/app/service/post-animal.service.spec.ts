import { TestBed } from '@angular/core/testing';

import { PostAnimalService } from './post-animal.service';

describe('PostAnimalService', () => {
  let service: PostAnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostAnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
