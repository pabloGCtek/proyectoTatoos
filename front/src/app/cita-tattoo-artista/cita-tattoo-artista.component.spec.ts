import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaTattooArtistaComponent } from './cita-tattoo-artista.component';

describe('CitaTattooArtistaComponent', () => {
  let component: CitaTattooArtistaComponent;
  let fixture: ComponentFixture<CitaTattooArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaTattooArtistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaTattooArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
