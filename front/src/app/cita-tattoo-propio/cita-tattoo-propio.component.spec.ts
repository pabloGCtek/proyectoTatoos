import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaTattooPropioComponent } from './cita-tattoo-propio.component';

describe('CitaTattooPropioComponent', () => {
  let component: CitaTattooPropioComponent;
  let fixture: ComponentFixture<CitaTattooPropioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaTattooPropioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaTattooPropioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
