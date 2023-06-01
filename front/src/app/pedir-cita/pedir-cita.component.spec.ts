import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedirCitaComponent } from './pedir-cita.component';

describe('PedirCitaComponent', () => {
  let component: PedirCitaComponent;
  let fixture: ComponentFixture<PedirCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedirCitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedirCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
