import { TestBed } from '@angular/core/testing';

import { ArtistasService } from './artistas.service';

describe('ArtistasService', () => {
  let service: ArtistasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
