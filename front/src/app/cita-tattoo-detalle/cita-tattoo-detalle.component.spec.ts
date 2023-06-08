import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaTattooDetalleComponent } from './cita-tattoo-detalle.component';

describe('CitaTattooDetalleComponent', () => {
  let component: CitaTattooDetalleComponent;
  let fixture: ComponentFixture<CitaTattooDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitaTattooDetalleComponent]
    });
    fixture = TestBed.createComponent(CitaTattooDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
