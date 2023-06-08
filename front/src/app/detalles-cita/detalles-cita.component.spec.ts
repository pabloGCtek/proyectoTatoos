import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesCitaComponent } from './detalles-cita.component';

describe('DetallesCitaComponent', () => {
  let component: DetallesCitaComponent;
  let fixture: ComponentFixture<DetallesCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesCitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
