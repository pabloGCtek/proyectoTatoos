import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTattoComponent } from './detalles-tatto.component';

describe('DetallesTattoComponent', () => {
  let component: DetallesTattoComponent;
  let fixture: ComponentFixture<DetallesTattoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesTattoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesTattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
