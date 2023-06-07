import { TestBed } from '@angular/core/testing';

import { ImagenAStringService } from './imagen-astring.service';

describe('ImagenAStringService', () => {
  let service: ImagenAStringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenAStringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
